import {
  Component,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  Input,
  HostListener,
  ElementRef
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as addMonths_ from 'date-fns/add_months';
import * as subMonths_ from 'date-fns/sub_months';
import * as getDaysInMonth_ from 'date-fns/get_days_in_month';
import * as setDate_ from 'date-fns/set_date';
import * as isToday_ from 'date-fns/is_today';
import * as getDayOfYear_ from 'date-fns/get_day_of_year';
import * as isSameYear_ from 'date-fns/is_same_year';
import * as isSameDay_ from 'date-fns/is_same_day';
import * as isBefore_ from 'date-fns/is_before';
import * as isAfter_ from 'date-fns/is_after';

// https://github.com/rollup/rollup/issues/670
const addMonths = addMonths_;
const subMonths = subMonths_;
const getDaysInMonth = getDaysInMonth_;
const setDate = setDate_;
const isToday = isToday_;
const getDayOfYear = getDayOfYear_;
const isSameYear = isSameYear_;
const isSameDay = isSameDay_;
const isBefore = isBefore_;
const isAfter = isAfter_;

const monthNames = [
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

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const gridItems = 35;

let instanceId = 0;

@Component({
  selector: 'ngx-input-datepicker',
  templateUrl: './ngx-input-datepicker.component.html',
  styleUrls: ['./ngx-input-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputDatepickerComponent),
      multi: true
    }
  ]
})
export class NgxInputDatepickerComponent
  implements ControlValueAccessor, OnInit {
  @Input() showInput = false;
  @Input() range = false;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() showLabel = true;
  @Input() minDate: Date;
  @Input() maxDate: Date;

  weekDays = weekDays;
  calendarDate: Date;
  monthName: string;
  year: number;
  daysInMonth: Date[];
  dayOfWeekOffset: number[];
  showInputDatepicker = false;

  private _value: Date | [Date, Date];
  private selectedRangeIndex = 0;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  instanceId = `ngx-input-switch-${instanceId++}`;

  onChange = (_value: Date | [Date, Date]) => {};
  onTouched = () => {};

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.showInputDatepicker = false;
    }
  }

  registerOnChange(fn: (value: Date) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: Date) {
    this.value = value;
  }

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    this.setCalendarDate(new Date());

    if (!this.label) {
      throw new Error('Attribute label required');
    }
  }

  prev() {
    this.setCalendarDate(subMonths(this.calendarDate, 1));
  }

  next() {
    this.setCalendarDate(addMonths(this.calendarDate, 1));
  }

  clear() {
    this.value = undefined;
  }

  setCalendarDate(date: Date) {
    this.calendarDate = date;
    this.monthName = monthNames[this.calendarDate.getMonth()];
    this.year = this.calendarDate.getFullYear();
    this.daysInMonth = daysInMonth(this.calendarDate);
    this.dayOfWeekOffset = getDayOfWeekOffset(this.calendarDate);
  }

  setDay(dayOfMonth: Date) {
    if (this.range) {
      this.setRange(dayOfMonth);
    } else {
      this.setSingleDay(dayOfMonth);
    }
  }

  setSingleDay(dayOfMonth: Date) {
    const value = this.value as Date;
    const dayIsSameDayOfYear =
      getDayOfYear(value) ===
      getDayOfYear(setDate(this.calendarDate, dayOfMonth.getDate()));
    this.value = !dayIsSameDayOfYear
      ? setDate(this.calendarDate, dayOfMonth.getDate())
      : undefined;
    this.showInputDatepicker = false;
  }

  setRange(dayOfMonth: Date) {
    let dates = this.value as [Date, Date];
    const day = dayOfMonth.getDate();
    const dayIsSameDayOfYear =
      getDayOfYear(dates[this.selectedRangeIndex]) ===
      getDayOfYear(setDate(this.calendarDate, day));

    if (this.selectedRangeIndex === 0) {
      dates[0] = !dayIsSameDayOfYear
        ? setDate(this.calendarDate, day)
        : undefined;
      dates[1] = undefined;
    } else {
      dates[1] = setDate(this.calendarDate, day);
    }

    dates = isAfter(dates[0], dates[1]) ? [dates[1], dates[0]] : dates;
    this.selectedRangeIndex = this.selectedRangeIndex === 0 ? 1 : 0;
    this.value = [dates[0], dates[1]];
  }

  getDayClass(day: Date) {
    const cssClasses = [];

    if (isToday(day)) {
      cssClasses.push('ngx-input-datepicker__today');
    }

    if (!this.range && isSameDate(day, this.value as Date)) {
      cssClasses.push('ngx-input-datepicker__selected-date');
    }

    if (this.range) {
      const dateRange = this.value as [Date, Date];

      if (isStartOfDateRange(day, dateRange)) {
        cssClasses.push('ngx-input-datepicker__start-date');
      }

      if (isEndOfDateRange(day, dateRange)) {
        cssClasses.push('ngx-input-datepicker__end-date');
      }

      if (isBetweenDateRange(day, dateRange)) {
        cssClasses.push('ngx-input-datepicker__in-range-date');
      }
    }

    return cssClasses;
  }

  getIsSelected(day: Date) {
    if (!this.range && isSameDate(day, this.value as Date)) {
      return true;
    }

    if (this.range) {
      const dateRange = this.value as [Date, Date];

      if (
        isStartOfDateRange(day, dateRange) ||
        isEndOfDateRange(day, dateRange)
      ) {
        return true;
      }
    }

    return false;
  }

  getIsDisabled(day: Date) {
    if (this.minDate && isBefore(day, this.minDate)) {
      return true;
    }

    if (this.maxDate && isAfter(day, this.maxDate)) {
      return true;
    }

    return false;
  }
}

function isSameDate(date1: Date, date2: Date) {
  if (date2 && isSameDay(date2, date1) && isSameYear(date2, date1)) {
    return true;
  } else {
    return false;
  }
}

function isBetweenDateRange(date: Date, range: [Date, Date]) {
  const isDateRange = range[0] && range[1];

  if (isDateRange && isAfter(date, range[0]) && isBefore(date, range[1])) {
    return true;
  } else {
    return false;
  }
}

function isStartOfDateRange(date: Date, range: [Date, Date]) {
  if (range && isSameDay(range[0], date) && isSameYear(range[0], date)) {
    return true;
  } else {
    return false;
  }
}

function isEndOfDateRange(date: Date, range: [Date, Date]) {
  if (range && isSameDay(range[1], date) && isSameYear(range[1], date)) {
    return true;
  } else {
    return false;
  }
}

function getDayOfWeekOffset(date: Date) {
  const d = new Date();
  const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
  const dayOfWeek = firstDay.getDay();

  return Array.from(Array(dayOfWeek), (e, i) => i);
}

function daysInMonth(date: Date) {
  const totalDays = getDaysInMonth(date);
  return Array.from(Array(totalDays), (e, i) => {
    const day = new Date(date.getTime());
    day.setDate(i + 1);
    return day;
  });
}
