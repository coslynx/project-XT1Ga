File: moment.js

const moment = require('moment');

module.exports = {
  getCurrentTimestamp: () => {
    return moment().format();
  },
  convertTimestampToDate: (timestamp) => {
    return moment(timestamp).format('MMMM Do YYYY, h:mm:ss a');
  },
  calculateDuration: (startTime, endTime) => {
    const start = moment(startTime);
    const end = moment(endTime);
    const duration = moment.duration(end.diff(start));
    return duration.humanize();
  }
};