var startOfWeek = require('date-fns/start_of_week');
var endOfWeek = require('date-fns/end_of_week');
var eachDay = require('date-fns/each_day');
var dayData = require('./day_data');

/**
 * @param {string|date} date
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var weekData = function(date, weekStartsOn) {
  weekStartsAt = weekStartsAt || 0;
  var start = startOfWeek(date, {weekStartsOn: weekStartsOn});
  var end = endOfWeek(date, {weekStartsOn: weekStartsOn});
  return eachDay(start, end).map(dayData);
};

module.exports = weekData;

