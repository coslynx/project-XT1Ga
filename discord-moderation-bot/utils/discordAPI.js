const Discord = require('discord.js');
const moment = require('./moment');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', async (message) => {
  // Your message handling logic here
});

client.login('your-bot-token');