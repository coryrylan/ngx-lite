import { Component, OnInit, ViewEncapsulation, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import * as addMonths from 'date-fns/add_months';
import * as subMonths from 'date-fns/sub_months';
import * as getDaysInMonth from 'date-fns/get_days_in_month';
import * as setDate from 'date-fns/set_date';
import * as isToday from 'date-fns/is_today';
import * as getDayOfYear from 'date-fns/get_day_of_year';

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

  private _value: Date | [Date, Date] = new Date();

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
    const dayIsSameDayOfYear = getDayOfYear(this.value as Date) === getDayOfYear(setDate(this.calendarDate, dayOfMonth));
    this.value = !dayIsSameDayOfYear ? setDate(this.calendarDate, dayOfMonth) : undefined;
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

    if (this.value && !this.range) {
      const isSameYear = (this.value as Date).getFullYear() === this.calendarDate.getFullYear();
      const dayIsSameDayOfYear = getDayOfYear(this.value as Date) === getDayOfYear(setDate(this.calendarDate, day));

      if (dayIsSameDayOfYear && isSameYear) {
        cssClasses.push('ngx-input-datepicker__current-date');
      }
    }

    return cssClasses;
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
