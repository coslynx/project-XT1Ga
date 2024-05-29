const Discord = require('discord.js');
const client = new Discord.Client();
const { token } = require('../utils/discordAPI');

client.on('ready', () => {
    console.log('Bot is ready for moderation!');
});

client.login(token);