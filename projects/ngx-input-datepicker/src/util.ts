import * as isSameDay_ from 'date-fns/is_same_day';
import * as isSameYear_ from 'date-fns/is_same_year';
import * as getDaysInMonth_ from 'date-fns/get_days_in_month';
import * as isBefore_ from 'date-fns/is_before';
import * as isAfter_ from 'date-fns/is_after';

const getDaysInMonth = getDaysInMonth_;
const isSameYear = isSameYear_;
const isSameDay = isSameDay_;
const isBefore = isBefore_;
const isAfter = isAfter_;

export const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const monthNames = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];

export function removeTimeIfAvailable(date: Date) {
  return date ? removeTime(date) : date;
}

export function removeTime(date: Date) {
  const d = new Date(date.getTime());
  d.setHours(0);
  d.setMinutes(0);
  d.setSeconds(0);
  d.setMilliseconds(0);

  return d;
}

export function isSameDate(date1: Date, date2: Date) {
  if (date2 && isSameDay(date2, date1) && isSameYear(date2, date1)) {
    return true;
  } else {
    return false;
  }
}

export function isBetweenDateRange(date: Date, range: [Date, Date]) {
  const isDateRange = range[0] && range[1];

  if (isDateRange && isAfter(date, range[0]) && isBefore(date, range[1])) {
    return true;
  } else {
    return false;
  }
}

export function isStartOfDateRange(date: Date, range: [Date, Date]) {
  if (range && isSameDay(range[0], date) && isSameYear(range[0], date)) {
    return true;
  } else {
    return false;
  }
}

export function isEndOfDateRange(date: Date, range: [Date, Date]) {
  if (range && isSameDay(range[1], date) && isSameYear(range[1], date)) {
    return true;
  } else {
    return false;
  }
}

export function getDayOfWeekOffset(date: Date) {
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDay.getDay();
  return Array.from(Array(dayOfWeek), (_, i) => i);
}

export function daysInMonth(date: Date) {
  const totalDays = getDaysInMonth(date);
  return Array.from(Array(totalDays), (_, i) => {
    const day = new Date(date.getTime());
    day.setDate(i + 1);
    return day;
  });
}
