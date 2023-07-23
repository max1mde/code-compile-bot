<p align="center">
<a href=""><img src="https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB" alt="React"></a>
<a href=""><img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB" alt="bStats"></a>
</p>

# Java compiler bot
A bot which can compile and excecute java code.
The output will be displays as a message.

![image](https://github.com/MaximFiedler/code-compile-bot/assets/114857048/8d622e66-a909-4b90-b535-4001369a751d)

# Command
- /tutorial
	- Shows how to use the bot

# Dependencies
- [Node.js](https://nodejs.org/en/download)
- [Java](https://www.java.com/en/download/) / [Java JDK](https://www.oracle.com/java/technologies/downloads/)

# Installation
Add a `token.json` file
```json
{
	"token": "YOUR_BOT_TOKEN"
}
```
Use the following commands to install all libraries and start the bot:
- `npm install` (installs all libraries)
- `tsc` (Converts all typescript files into javascript files and copies them into the /build folder)
- `node build/src/index.js` (Starts the bot)

