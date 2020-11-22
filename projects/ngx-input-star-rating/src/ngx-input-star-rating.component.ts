import {
  forwardRef,
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const starIcons = {
  outline: 'outline',
  full: 'full',
  half: 'half',
};

@Component({
  selector: 'ngx-input-star-rating',
  templateUrl: './ngx-input-star-rating.component.html',
  styleUrls: ['./ngx-input-star-rating.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputStarRatingComponent),
      multi: true,
    },
  ],
  encapsulation: ViewEncapsulation.None,
})
export class NgxInputStarRatingComponent
  implements ControlValueAccessor, OnInit, OnChanges {
  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.onChange(val);
    this.valueUpdate(this._value);
    this.onTouched();
  }

  @Input('value') _value = 0;
  @Input() count = 5;
  @Input() disabled = false;

  readonly starIcons = starIcons;

  buttons: { active: boolean; icon: string }[] = [];

  // tslint:disable-next-line:no-empty
  onChange = (_value: number) => {};

  // tslint:disable-next-line:no-empty
  onTouched = () => {};

  registerOnChange(fn: (value: number) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: number) {
    if (value !== this.value) {
      this.value = value;
    }
  }

  ngOnInit() {
    for (let i = 0; i < this.count; i++) {
      this.buttons.push({ active: false, icon: starIcons.outline });
    }

    this.valueUpdate(this.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.value && changes.value.currentValue) {
      this.valueUpdate(changes.value.currentValue);
    }
  }

  rate(index: number) {
    this.buttons.forEach((btn, i) => {
      if (i <= index) {
        btn.icon = starIcons.full;
      } else {
        btn.icon = starIcons.outline;
      }
    });

    const total = this.buttons.reduce((prev, next) => {
      if (next.icon === starIcons.full) {
        return prev + 1;
      } else {
        return prev;
      }
    }, 0);

    this.value = total;
  }

  mouseEnter(index: number) {
    this.buttons.forEach((btn, i) => {
      if (i <= index) {
        btn.active = true;
      } else {
        btn.active = false;
      }
    });
  }

  mouseLeave() {
    this.buttons.forEach((i) => (i.active = false));
  }

  private valueUpdate(value: number) {
    this.buttons.forEach((btn, i) => {
      const starValue = i + 1;

      if (value >= starValue) {
        btn.icon = starIcons.full;
      }

      if (value >= starValue - 0.5 && value < starValue) {
        btn.icon = starIcons.half;
      }
    });
  }
}
