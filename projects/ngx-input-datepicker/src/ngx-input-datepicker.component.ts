import {
  Component,
  OnInit,
  ViewEncapsulation,
  forwardRef,
  Input,
  HostListener,
  ElementRef,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import isAfter from 'date-fns/esm/isAfter';
import isBefore from 'date-fns/esm/isBefore';
import getDayOfYear from 'date-fns/esm/getDayOfYear';
import isToday from 'date-fns/esm/isToday';
import setDate from 'date-fns/esm/setDate';
import subMonths from 'date-fns/esm/setDate';
import addMonths from 'date-fns/esm/setDate';
import {
  removeTimeIfAvailable,
  daysInMonth,
  getDayOfWeekOffset,
  isStartOfDateRange,
  isEndOfDateRange,
  isBetweenDateRange,
  isSameDate,
  weekDays,
  monthNames,
} from './util';

let instanceId = 0;

@Component({
  selector: 'ngx-input-datepicker',
  templateUrl: './ngx-input-datepicker.component.html',
  styleUrls: ['./ngx-input-datepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputDatepickerComponent),
      multi: true,
    },
  ],
})
export class NgxInputDatepickerComponent
  implements ControlValueAccessor, OnInit {
  @Input() showInput = false;
  @Input() range = false;
  @Input() placeholder = '';
  @Input() label = '';
  @Input() showLabel = true;
  @Input() minDate?: Date;
  @Input() maxDate?: Date;

  weekDays = weekDays;
  calendarDate?: Date;
  monthName?: string;
  year?: number;
  daysInMonth?: Date[];
  dayOfWeekOffset?: number[];
  showInputDatepicker = false;

  private _value?: Date | [Date, Date];
  private selectedRangeIndex = 0;

  get value() {
    return this._value;
  }

  set value(val: any) {
    if (val) {
      if ((val as Date[]).length) {
        val = [removeTimeIfAvailable(val[0]), removeTimeIfAvailable(val[1])];
      } else {
        val = removeTimeIfAvailable(val as Date);
      }
    }

    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  instanceId = `ngx-input-switch-${instanceId++}`;

  onChange: any = (_value: Date | [Date, Date]) => {};
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
    this.setCalendarDate(subMonths(this.calendarDate as Date, 1));
  }

  next() {
    this.setCalendarDate(addMonths(this.calendarDate as Date, 1));
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
      getDayOfYear(setDate(this.calendarDate as Date, dayOfMonth.getDate()));
    this.value = !dayIsSameDayOfYear
      ? setDate(this.calendarDate as Date, dayOfMonth.getDate())
      : undefined;
    this.showInputDatepicker = false;
  }

  setRange(dayOfMonth: Date) {
    let dates: any = this.value as [Date, Date];
    const day = dayOfMonth.getDate();
    const dayIsSameDayOfYear =
      getDayOfYear(dates[this.selectedRangeIndex]) ===
      getDayOfYear(setDate(this.calendarDate as Date, day));

    if (this.selectedRangeIndex === 0) {
      dates[0] = !dayIsSameDayOfYear
        ? setDate(this.calendarDate as Date, day)
        : undefined;
      dates[1] = undefined;
    } else {
      dates[1] = setDate(this.calendarDate as Date, day);
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
