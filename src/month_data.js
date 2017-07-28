
var startOfWeek = require('date-fns/start_of_week');
var startOfMonth = require('date-fns/start_of_month');
var endOfWeek = require('date-fns/end_of_week');
var endOfMonth = require('date-fns/end_of_month');
var addDays = require('date-fns/add_days');
var eachDay = require('date-fns/each_day');
var isSameMonth = require('date-fns/is_same_month');
var isAfter = require('date-fns/is_after');
var weekData = require('./week_data');

/**
 * @param {string|date} dirtyDate
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var monthData = function(dirtyDate, weekStartsOn) {
  var date = startOfWeekDate = new Date(dirtyDate);
  var startDate = startOfWeek(startOfMonth(date), {weekStartsOn: weekStartsOn});
  var endDate = endOfWeek(endOfMonth(date), {weekStartsOn: weekStartsOn});
  var month = [];
  var week, startOfWeekDate;

  while (!isAfter(startOfWeekDate, endDate)) {
    week = weekData(startOfWeekDate, weekStartsOn).map(
      function(dayData) {
        dayData.isSameMonth = isSameMonth(date, dayData.date);
        return dayData;
      }
    );
    month.push(week);

    startOfWeekDate = addDays(startOfWeekDate, 7);
  }

  return month;
};

module.exports = monthData;
