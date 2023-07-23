const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('tutorial')
		.setDescription('Shows how to use the bot'),
	async execute(interaction) {
		await interaction.reply('# How to use this bot\n' +
			'Use a "run" or "!" before a code-block to execute the code\n' +
			'\n' +
			'run\n' +
			'```java\n' +
			'// Code\n' +
			'```\n' +
			'# You can write the code with and without a main function\n' +
			' \n' +
			' \n' +
			'## With a main function\n' +
			'\n' +
			'run\n' +
			'```java\n' +
			'public static void main(String[] args) {\n' +
			'	System.out.println("Hello world!");\n' +
			'}\n' +
			'```\n' +
			'## Without a main function\n' +
			'\n' +
			'run\n' +
			'```java\n' +
			'System.out.println("Hello world!");\n' +
		  '```\n' +
			'\n' +
			'`You can create a code-block using "```java" at the beginning and "```" at the end of the code`');
	},
};