import { forwardRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

let instanceId = 0;

@Component({
  selector: 'ngx-input-switch',
  templateUrl: './ngx-input-switch.component.html',
  styleUrls: ['./ngx-input-switch.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputSwitchComponent),
      multi: true
    }
  ]
})
export class NgxInputSwitchComponent implements ControlValueAccessor {
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.onTouched();
  }

  @Input() label = 'switch';
  @Input('value') _value = false;

  instanceId = `ngx-input-switch-${instanceId++}`;

  // tslint:disable-next-line:no-empty
  onChange = (_value: boolean) => { };

  // tslint:disable-next-line:no-empty
  onTouched = () => { };

  registerOnChange(fn: (value: boolean) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: boolean) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  switch() {
    console.log('switch()');
    this.value = !this.value;
  }
}
