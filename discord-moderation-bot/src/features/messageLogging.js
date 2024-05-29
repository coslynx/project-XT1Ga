File: discord-moderation-bot/src/features/messageLogging.js

const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
  logMessage: (message) => {
    const logChannel = message.guild.channels.cache.find(channel => channel.name === 'log-channel');
    
    if (!logChannel) {
      console.error('Log channel not found');
      return;
    }
    
    const logEmbed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Message Logged')
      .addField('Author', message.author.tag)
      .addField('Content', message.content)
      .addField('Timestamp', moment(message.createdAt).format('MMMM Do YYYY, h:mm:ss a'));
    
    logChannel.send({ embeds: [logEmbed] });
  }
};