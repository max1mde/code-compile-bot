import { Client, ActivityType, TextInputStyle, GatewayIntentBits } from 'discord.js';
import config from './config.json';
import { spawn } from 'child_process';


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });

client.once('ready', () => {
	console.log('Bot is ready!');
});

client.on('messageCreate', async (message) => {
	if (!message.content.trim() || message.author.bot || message.author === client.user) return;
	if (message.content.startsWith('!') || message.content.startsWith('run') && message.content.includes('```')) {
		await compileCode(message);
	}
});

async function compileCode(message) {
	const codeBlock = message.content.match(/```([a-zA-Z]+)\s*([\s\S]+?)\s*```/);
	if (!codeBlock) {
		await message.reply('Invalid code block format.');
		return;
	}
	const code = codeBlock[2].trim();
	let output = '';
	let javaCodeWithoutMain = `
import java.io.*;
import java.util.*;
import java.awt.*;
public class Main {
	${code}
}`;

	let javaCodeWithMain = `
import java.io.*;
import java.util.*;
import java.awt.*;
public class Main {
	public static void main(String[] args) {
		${code}
	}
}`;

	const javaFileName = 'Main.java';

	// Save the Java code to a file
	const fs = require('fs');
	fs.writeFileSync(javaFileName, code.includes("public static void main(String[] args)") ? javaCodeWithoutMain : javaCodeWithMain, {encoding: 'utf-8'});

	// Compile the Java code
	const javacProcess = spawn('javac', [javaFileName]);

	javacProcess.stderr.on('data', (data) => {
		output += `${data}`;
	});

	javacProcess.on('close', (code) => {
		if (code === 0) {
			excecuteCode(output, message);
		} else {
			message.reply("## Error!\nError during Java code execution:\n" + output);
		}
	});
}

function excecuteCode(output, message) {
	//const javaProcess = spawn('java', ['-classpath', '.', 'Main']);
	const javaProcess = spawn('java', ['-classpath', '.', '-Djava.security.manager', '-Djava.security.policy=java.policy', 'Main']);

	javaProcess.stdout.on('data', (data) => {
		output += data.toString();
	});

	javaProcess.stderr.on('data', (data) => {
		output += `${data}`;
	});

	javaProcess.on('close', () => {
		// Send the output back to the Discord channel
		if (output && output.trim().length > 0) {
			const finalMessage = "# Output\n```" +
				output
				+ "```"

			if (finalMessage.length > 2000) {
				message.reply("## Error!\nThe output is to long!");
			} else {
				message.reply(finalMessage);
			}
		} else {
			message.reply('No output!');
		}
	});
}

client.login(config.token);