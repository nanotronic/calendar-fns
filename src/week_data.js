var startOfWeek = require('date-fns/start_of_week');
var endOfWeek = require('date-fns/end_of_week');
var eachDay = require('date-fns/each_day');
var dayData = require('./day_data');

/**
 * @param {string|date} date
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var weekData = function(date, weekStartsAt) {
  weekStartsAt = weekStartsAt || 0;
  var start = startOfWeek(date, weekStartsAt);
  var end = endOfWeek(date, weekStartsAt);
  return eachDay(start, end).map(dayData);
};

module.exports = weekData;

