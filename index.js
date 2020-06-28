const Discord = require('discord.js');
const bot = new Discord.Client();
const config = require("./config.json")
const fs = require("fs");
require("./util/eventHandler.js")

bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
if(commandFiles.length <= 0) {
    return console.log(`[LOGS] Could not find commands! + bot  is now online!`)
}

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}

bot.once('ready', () => {
	console.log(`the bot is now online!`);
});

bot.login(config.token);