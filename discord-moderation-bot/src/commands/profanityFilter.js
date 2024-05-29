profanityFilter.js:

const profanityFilter = require('profanity-filter');

profanityFilter.addWords(['badword1', 'badword2', 'badword3']);

module.exports = {
  run: async (message) => {
    if (message.author.bot) return;

    const content = message.content.toLowerCase();

    if (profanityFilter.check(content)) {
      message.delete();
      message.reply('Please refrain from using offensive language.');
    }
  },
};