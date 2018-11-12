import {
  removeTimeIfAvailable,
  removeTime,
  isSameDate,
  isBetweenDateRange,
  isStartOfDateRange,
  isEndOfDateRange,
  getDayOfWeekOffset,
  daysInMonth
} from './util';

describe('ngx-input-datepicker utilities', () => {
  it('should remove time from a date object', () => {
    let date = new Date();
    date = removeTime(date);

    expect(date.getHours()).toBe(0);
    expect(date.getMinutes()).toBe(0);
    expect(date.getSeconds()).toBe(0);
    expect(date.getMilliseconds()).toBe(0);
  });

  it('should remove time values from a date object if available', () => {
    const date = new Date();

    expect(removeTimeIfAvailable(null)).toBe(null);
    expect(date.getHours()).toBeTruthy();
    expect(date.getMinutes()).toBeTruthy();
    expect(date.getSeconds()).toBeTruthy();
    expect(removeTimeIfAvailable(date).getMilliseconds()).toBe(0);
  });

  it('should check if two dates are the same', () => {
    const date = new Date();
    const date2 = new Date();

    expect(isSameDate(date, date2)).toBe(true);
    date2.setFullYear(2000);
    date2.setDate(15);
    expect(isSameDate(date, date2)).toBe(false);
  });

  it('should check if a date is between two dates', () => {
    const date = new Date();
    const date2 = new Date();
    const date3 = new Date();

    expect(isBetweenDateRange(date, [date2, date3])).toBe(false);
    date2.setFullYear(2000);
    date3.setFullYear(3000);
    expect(isBetweenDateRange(date, [date2, date3])).toBe(true);
  });

  it('should check if a date is the start of a date range', () => {
    const date = new Date();
    const date2 = new Date();
    const date3 = new Date();

    date2.setFullYear(2000);
    date3.setFullYear(3000);
    expect(isStartOfDateRange(date, [date2, date3])).toBe(false);
    expect(isStartOfDateRange(date3, [date2, date3])).toBe(false);
    expect(isStartOfDateRange(date2, [date2, date3])).toBe(true);
  });

  it('should check if a date is the end of a date range', () => {
    const date = new Date();
    const date2 = new Date();
    const date3 = new Date();

    date2.setFullYear(2000);
    date3.setFullYear(3000);
    expect(isEndOfDateRange(date, [date2, date3])).toBe(false);
    expect(isEndOfDateRange(date2, [date2, date3])).toBe(false);
    expect(isEndOfDateRange(date3, [date2, date3])).toBe(true);
  });

  it('should get the day of the week offset', () => {
    const date = new Date();
    date.setDate(4);
    expect(getDayOfWeekOffset(date).toString()).toBe([0, 1, 2, 3].toString());
  });

  it('should return a list of dates for the month', () => {
    const date = new Date(2000, 0, 0);
    expect(daysInMonth(date).length).toBe(31);
  });
});
