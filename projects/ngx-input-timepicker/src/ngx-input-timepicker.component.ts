import {
  Component,
  ViewEncapsulation,
  forwardRef,
  Input,
  ChangeDetectionStrategy,
  OnInit
} from '@angular/core';
import { NG_VALUE_ACCESSOR, FormControl } from '@angular/forms';
import { distinctUntilChanged } from 'rxjs/operators';

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
export class NgxInputTimepickerComponent implements OnInit {
  @Input() step: number = 1;

  private _value = new Date();
  public control = new FormControl(this._value);

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.zeroSeconds();
    this.control.setValue(this._value);
    this.onChange(val);
    this.onTouched();
  }

  constructor() {
    this.zeroSeconds();
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

  ngOnInit() {
    this.control.valueChanges.pipe(distinctUntilChanged()).subscribe(v => this.value = v);
  }

  nextHours() {
    this.setHours(+this.step);
  }

  prevHours() {
    this.setHours(-this.step);
  }

  nextMinutes() {
    this.setMinutes(+this.step);
  }

  prevMinutes() {
    this.setMinutes(-this.step);
  }

  reset() {
  }

  getHours() {
    return this.value.getHours();
  }

  getMinutes() {
    return this.value.getMinutes();
  }

  setHours(h: number) {
    this.value.setHours(this.getHours() + h);
  }

  setMinutes(m: number) {
    this.value.setMinutes(this.getMinutes() + m);
  }

  zeroSeconds() {
    this._value.setSeconds(0);
    this._value.setMilliseconds(0);
  }
}
