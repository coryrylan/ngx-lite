import { Component, OnInit, ViewEncapsulation, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as addMonths from 'date-fns/add_months';
import * as subMonths from 'date-fns/sub_months';
import * as getDaysInMonth from 'date-fns/get_days_in_month';
import * as setDate from 'date-fns/set_date';
import * as isToday from 'date-fns/is_today';
import * as getDayOfYear from 'date-fns/get_day_of_year';
import * as isSameYear from 'date-fns/is_same_year';
import * as isSameDay from 'date-fns/is_same_day';
import * as isBefore from 'date-fns/is_before';
import * as isAfter from 'date-fns/is_after';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const gridItems = 35;

let instanceId = 0;

@Component({
  selector: 'ngx-input-datepicker',
  templateUrl: './ngx-input-datepicker.component.html',
  styleUrls: ['./ngx-input-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => NgxInputDatepickerComponent), multi: true }],
})
export class NgxInputDatepickerComponent implements ControlValueAccessor, OnInit {
  @Input() range = false;
  weekDays = weekDays;
  calendarDate: Date;
  monthName: string;
  year: number;
  daysInMonth: number[];
  dayOfWeekOffset: number[];

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

  onChange = (_value: Date | [Date, Date]) => { };
  onTouched = () => { };

  registerOnChange(fn: (value: Date) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: Date) {
    this.value = value;
  }

  constructor() { }

  ngOnInit() {
    this.getNewDate(new Date());
  }

  getNewDate(date: Date) {
    this.calendarDate = date;
    this.monthName = monthNames[this.calendarDate.getMonth()];
    this.year = this.calendarDate.getFullYear();
    this.daysInMonth = daysInMonth(this.calendarDate);
    this.dayOfWeekOffset = getDayOfWeekOffset(this.calendarDate);
  }

  setDay(dayOfMonth: number) {
    if (!this.range) {
      const value =  this.value as Date;
      const dayIsSameDayOfYear = getDayOfYear(value) === getDayOfYear(setDate(this.calendarDate, dayOfMonth));
      this.value = !dayIsSameDayOfYear ? setDate(this.calendarDate, dayOfMonth) : undefined;
    } else {
      const value = this.value as [Date, Date];
      const dayIsSameDayOfYear = getDayOfYear(value[this.selectedRangeIndex]) === getDayOfYear(setDate(this.calendarDate, dayOfMonth));

      this.value[this.selectedRangeIndex] = !dayIsSameDayOfYear ? setDate(this.calendarDate, dayOfMonth) : undefined;
      this.value = isAfter(value[0], value[1]) ? [value[1], value[0]] : value;
      this.selectedRangeIndex = this.selectedRangeIndex === 0 ? 1 : 0;
    }
  }

  prev() {
    this.getNewDate(subMonths(this.calendarDate, 1));
  }

  next() {
    this.getNewDate(addMonths(this.calendarDate, 1));
  }

  getDayClass(day: number) {
    const cssClasses = [];
    const dayIsSameDay = day === this.calendarDate.getDate() && isToday(this.calendarDate);

    if (dayIsSameDay) {
      cssClasses.push('ngx-input-datepicker__today');
    }

    if (this.isSelectedDate(day)) {
      cssClasses.push('ngx-input-datepicker__selected-date');
    }

    if (this.isStartDate(day)) {
      cssClasses.push('ngx-input-datepicker__start-date');
    }

    if (this.isEndDate(day)) {
      cssClasses.push('ngx-input-datepicker__end-date');
    }

    if (this.isBetweenDateRange(day)) {
      cssClasses.push('ngx-input-datepicker__in-range-date');
    }

    return cssClasses;
  }

  private isBetweenDateRange(dayOfMonth: number) {
    const value = this.value as [Date, Date];
    const isDateRange = value[0] && value[1];
    const date = setDate(this.calendarDate, dayOfMonth);

    if (isDateRange && isAfter(date, value[0]) && isBefore(date, value[1])) {
      return true;
    } else {
      return false;
    }
  }

  private isStartDate(dayOfMonth: number) {
    const value = this.value as [Date, Date];
    if (value &&
      this.range &&
      isSameDay(value[0], setDate(this.calendarDate, dayOfMonth)) &&
      isSameYear(value[0], this.calendarDate)
    ) {
      return true;
    } else {
      return false;
    }
  }

  private isEndDate(dayOfMonth: number) {
    const value = this.value as [Date, Date];
    if (value &&
      this.range &&
      isSameDay(value[1], setDate(this.calendarDate, dayOfMonth)) &&
      isSameYear(value[1], this.calendarDate)
    ) {
      return true;
    } else {
      return false;
    }
  }

  private isSelectedDate(dayOfMonth: number) {
    const value = this.value as Date;
    if (
      value &&
      !this.range &&
      isSameDay(value, setDate(this.calendarDate, dayOfMonth)) &&
      isSameYear(value, this.calendarDate)
    ) {
      return true;
    } else {
      return false;
    }
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
  return Array.from(Array(totalDays), (e, i) => i + 1);
}
