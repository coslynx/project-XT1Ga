// Import necessary modules and files
const Discord = require('discord.js');
const moment = require('../utils/moment.js');
const { messageLog } = require('../features/messageLogging.js');

// Create the voteKick command
module.exports = {
  name: 'voteKick',
  description: 'Initiate a vote to kick a user from the server',
  execute(message, args) {
    const { member, mentions } = message;
    const target = mentions.users.first();

    if (!target) {
      return message.reply('Please mention the user you want to kick.');
    }

    const voteEmbed = new Discord.MessageEmbed()
      .setColor('#ff0000')
      .setTitle('Vote Kick Initiated')
      .setDescription(`Initiated by ${member}`)
      .addField('Target User', target);

    message.channel.send(voteEmbed)
      .then((msg) => {
        msg.react('👍');
        msg.react('👎');

        const filter = (reaction, user) => {
          return ['👍', '👎'].includes(reaction.emoji.name) && user.id === member.id;
        };

        msg.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
          .then((collected) => {
            const reaction = collected.first();

            if (reaction.emoji.name === '👍') {
              message.channel.send(`Vote passed! ${target} has been kicked.`);
              target.kick();
              messageLog(`User ${target} has been kicked from the server by vote.`);
            } else {
              message.channel.send(`Vote failed! ${target} remains in the server.`);
            }
          })
          .catch(() => {
            message.channel.send('Vote timed out. Please try again.');
          });
      });
  },
};