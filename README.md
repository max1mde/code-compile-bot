<p align="center">
<a href=""><img src="https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=61DAFB" alt="React"></a>
<a href=""><img src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=node.js&logoColor=61DAFB" alt="bStats"></a>
</p>
<div align="center">
<h1>Java compiler bot</h1>
<p></p>A bot which can compile and execute java code.
The output will be displayd as a message.</p>
</div>

> [!CAUTION]
> It is possible that a user can bypass any filters and permissions to execute malicious code.

![image](https://github.com/MaximFiedler/code-compile-bot/assets/114857048/65c98f4c-b8d3-4019-9374-a9ea081937cc)

# Commands
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

# Whitelist users
`src/config.json`<br>
{<br>
	"allowedUsers": [USER_ID, USER_ID....]<br>
}<br>
> **Note**  
> You can get the user id by right clicking on a user and selecting ([Developer mode must be enabled](https://beebom.com/how-enable-disable-developer-mode-discord/))
