<p align="center">
<a href=""><img src="https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB" alt="React"></a>
<a href=""><img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB" alt="bStats"></a>
</p>

# Java compiler bot
A bot which can compile and execute java code.
The output will be displayd as a message.

![image](https://github.com/MaximFiedler/code-compile-bot/assets/114857048/f19fddb5-d1c8-403a-b607-f3b272b3ecbe)


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
- `npm install` (Installs all libraries)
- `tsc` (Converts all typescript files into javascript files and copies them into the /build folder)
- `node build/src/index.js` (Starts the bot)

**Warning!**<br>
_It is possible that a user can bypass any filters and permissions to execute malicious code._
