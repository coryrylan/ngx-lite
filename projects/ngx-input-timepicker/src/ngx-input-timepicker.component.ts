import {
  Component,
  ViewEncapsulation,
  forwardRef,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'ngx-input-timepicker',
  templateUrl: './ngx-input-timepicker.component.html',
  styleUrls: ['./ngx-input-timepicker.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputTimepickerComponent),
      multi: true
    }
  ]
})
export class NgxInputTimepickerComponent implements ControlValueAccessor {
  @Input() hoursStep = 1;
  @Input() minutesStep = 1;
  @Input() military = false;

  private _value = new Date();

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.resetSeconds();
    this.onChange(val);
    this.onTouched();
  }

  constructor() {
    this.resetSeconds();
  }

  onChange = (_value: Date) => {};
  onTouched = () => {};

  registerOnChange(fn: (value: Date) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: Date) {
    if (value) {
      this.value = value;
    }
  }

  nextHours() {
    this.setHours(+this.hoursStep);
  }

  prevHours() {
    this.setHours(-this.hoursStep);
  }

  nextMinutes() {
    this.setMinutes(+this.minutesStep);
  }

  prevMinutes() {
    this.setMinutes(-this.minutesStep);
  }

  setHours(h: number) {
    const date = new Date(this.value);
    date.setHours(this.value.getHours() + h);
    date.setMinutes(this.value.getMinutes());
    this.value = date;
  }

  setMinutes(m: number) {
    const date = new Date(this.value);
    date.setMinutes(this.value.getMinutes() + m);
    date.setHours(this.value.getHours());
    this.value = date;
  }

  setAmPm() {
    const date = new Date(this.value);
    let hours = this.value.getHours();

    if (hours > 12) {
      hours -= 12;
    } else {
      hours += 12;
    }

    date.setMinutes(this.value.getMinutes());
    date.setHours(hours);
    this.value = date;
  }

  resetSeconds() {
    this._value.setSeconds(0);
    this._value.setMilliseconds(0);
  }
}
