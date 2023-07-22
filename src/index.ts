import { EmbedBuilder, Client, Events, ActivityType, ModalBuilder, TextInputBuilder, TextInputStyle, GatewayIntentBits, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, ActionRowBuilder } from 'discord.js';
import { PythonShell } from 'python-shell';
import { inspect } from 'util';
import config from './config.json';
import { spawn } from 'child_process';


const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.DirectMessages] });

client.once('ready', () => {
	console.log('Bot is ready!');
});

client.on('messageCreate', async (message) => {
	if (!message.content.trim() || message.author.bot || message.author === client.user) return;

	// Check if the message starts with the command prefix and contains a code block
	if (message.content.startsWith('!') && message.content.includes('```')) {

		if(message.guildId != "1051758423211003951") {
			await message.reply('Wrong discord server! You cannot use this bot here!');
			return;
		}

		const codeBlock = message.content.match(/```([a-zA-Z]+)\s*([\s\S]+?)\s*```/);
		if (!codeBlock) {
			await message.reply('Invalid code block format.');
			return;
		}

		const lang = codeBlock[1].trim().toLowerCase();
		const code = codeBlock[2].trim();

		let output = '';

		switch (lang) {
			case 'python':
				// Add your Python execution code here
				break;
			case 'java':

				let javaCodeWithoutMain = `
import java.io.*;
public class Main {
	${code}
}`;

				let javaCodeWithMain = `
import java.io.*;
public class Main {
	public static void main(String[] args) {
		${code}
	}
}`;

				const javaFileName = 'Main.java';

				// Save the Java code to a file
				const fs = require('fs');
				fs.writeFileSync(javaFileName, code.includes("public static void main(String[] args)") ? javaCodeWithoutMain : javaCodeWithMain, { encoding: 'utf-8' });

				// Compile the Java code
				const javacProcess = spawn('javac', [javaFileName]);

				javacProcess.stderr.on('data', (data) => {
					output += `${data}`;
				});

				javacProcess.on('close', (code) => {
					if (code === 0) {
						// If compilation is successful, execute the Java code
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
								const finalMessage = "# Output\n```"+
									output
									+ "```"

								if(finalMessage.length > 4000) {
									message.reply("## Error!\nThe output is to long!");
								} else {
									message.reply(finalMessage);
								}
							} else {
								message.reply('No output!');
							}
						});
					} else {
						// If compilation fails, send the error message
						message.reply("## Error!\nError during Java code execution:\n"+output);
					}
				});

				break;

			default:
				output = `Unsupported language: ${lang}`;
				// Send the output back to the Discord channel
				break;
		}

	}
});



client.login(config.token);