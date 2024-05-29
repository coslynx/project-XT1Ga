const moment = require('moment');

function timedMute(user, duration) {
    // Logic to mute the user for the specified duration
    console.log(`${user} has been muted for ${duration} seconds.`);
  
    setTimeout(() => {
        // Logic to unmute the user after the specified duration
        console.log(`${user} has been unmuted.`);
    }, duration * 1000);
}

module.exports = timedMute;