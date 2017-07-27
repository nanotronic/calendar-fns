var startOfWeek = require('date-fns/src/start_of_week');
var startOfMonth = require('date-fns/src/start_of_month');
var endOfWeek = require('date-fns/src/end_of_week');
var endOfMonth = require('date-fns/src/end_of_month');
var endOfWeek = require('date-fns/src/end_of_week');
var addDays = require('date-fns/src/add_days');
var eachDay = require('date-fns/src/each_day');
var weekData = require('./week_data');
var isSameMonth = require('date-fns/src/is_same_month');
var isWithinRange = require('date-fns/is_within_range')

var MAX_NUMBER_OF_WEEKS = 6;

/**
 * @param {string|date} dirtyDate
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var monthData = function(dirtyDate, weekStartsAt) {
  var date = new Date(dirtyDate);
  var startDate = startOfWeek(startOfMonth(date), weekStartsAt);
  var endDate = endOfWeek(endOfMonth(date), weekStartsAt);
  var month = [];
  var weekIndex, week, startOfWeekDate, endOfWeekDate;

  for (weekIndex = 0; weekIndex < MAX_NUMBER_OF_WEEKS; weekIndex++) {
    startOfWeekDate = addDays(startDate, weekIndex * 7);
    endOfWeekDate = addDays(startOfWeekDate, 6);
    if (!isWithinRange(endDate, startOfWeekDate, endOfWeekDate)
    week = weekData(startOfWeekDate, weekStartsAt).map(
      function(dayData) {
        dayData.isDummy = !isSameMonth(date, dayData.date);
        return dayData;
      }
    );

    month.push(week);
  }

  return month;
};

module.exports = monthData;

