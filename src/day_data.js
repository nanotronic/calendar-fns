var startOfDay = require('date-fns/start_of_day');
var isToday = require('date-fns/is_today');
var isWeekend = require('date-fns/is_weekend');
var isFirstDayOfMonth = require('date-fns/is_first_day_of_month');
var isLastDayOfMonth = require('date-fns/is_last_day_of_month');
var isFuture = require('date-fns/is_future');

/**
 * @param {date|string} dirtyDate
 * @returns {object}
 */
var dayData = function(dirtyDate) {
  var date = startOfDay(dirtyDate);

  return {
    date: date,
    isToday: isToday(date),
    isWeekend: isWeekend(date),
    isFirstDayOfMonth: isFirstDayOfMonth(date),
    isLastDayOfMonth: isLastDayOfMonth(date),
    isFuture: isFuture(date)
  }
};

module.exports = dayData;

