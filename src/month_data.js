
var startOfWeek = require('date-fns/start_of_week');
var startOfMonth = require('date-fns/start_of_month');
var endOfWeek = require('date-fns/end_of_week');
var endOfMonth = require('date-fns/end_of_month');
var endOfWeek = require('date-fns/end_of_week');
var addDays = require('date-fns/add_days');
var eachDay = require('date-fns/each_day');
var weekData = require('calendar-fns/src//week_data');
var isSameMonth = require('date-fns/is_same_month');
var isAfter = require('date-fns/is_after')

var MAX_NUMBER_OF_WEEKS = 6;

/**
 * @param {string|date} dirtyDate
 * @param {number} [weekStartsAt=0]
 * @returns {Object}
 */
var monthData = function(dirtyDate, weekStartsAt) {
  var date = new Date(dirtyDate);
  var startDate = startOfWeek(startOfMonth(date), {weekStartsOn: weekStartsAt});
  var endDate = endOfWeek(endOfMonth(date), {weekStartsOn: weekStartsAt});
  var month = [];
  var weekIndex, week, startOfWeekDate;

  for (weekIndex = 0; weekIndex < MAX_NUMBER_OF_WEEKS; weekIndex++) {
    startOfWeekDate = addDays(startDate, weekIndex * 7);
    if (isAfter(startOfWeekDate, endDate)) {
        break;
    }
    week = weekData(startOfWeekDate, weekStartsAt).map(
      function(dayData) {
        dayData.isSameMonth = isSameMonth(date, dayData.date);
        return dayData;
      }
    );

    month.push(week);
  }

  return month;
};
console.log(monthData('2017-07-01', 1))
