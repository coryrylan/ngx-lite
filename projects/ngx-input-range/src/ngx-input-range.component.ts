import {
  forwardRef,
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  ViewChild,
  PLATFORM_ID,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { distinctUntilChanged, startWith } from 'rxjs/operators';

let instanceId = 0;

@Component({
  selector: 'ngx-input-range',
  templateUrl: './ngx-input-range.component.html',
  styleUrls: ['./ngx-input-range.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => NgxInputRangeComponent),
      multi: true
    }
  ],
  encapsulation: ViewEncapsulation.None
})
export class NgxInputRangeComponent
  implements OnInit, OnChanges, OnDestroy, AfterViewInit {
  @ViewChild('rangeInput') rangeInput: ElementRef;
  @Input() label = '';
  @Input() measure = '';
  @Input() min = 0;
  @Input() max = 100;
  @Input() step = 1;
  @Input() labels: string[] = null;

  private _value = 50;
  control = new FormControl(this._value);

  margin: string;
  maxWidth: string;
  rangeLabelCssClasses: string[];
  readonly instanceId = `ngx-input-range-id-${instanceId}`;
  private currentLabelIndex: number;
  private inputSubscription: Subscription;
  private readonly styleId = `ngx-input-range-id-${instanceId}-style`;
  private readonly isBrowser: boolean;

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
    this.control.setValue(this._value);
    this.updateCurrentLabel();
    this.renderFallbackTrack();
    this.onChange(val);
    this.onTouched();
  }

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    instanceId++;
    this.isBrowser = isPlatformBrowser(platformId);
  }

  onChange = (_value: number) => {};
  onTouched = () => {};

  registerOnChange(fn: (value: number) => void) {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  writeValue(value: number) {
    if (value) {
      this.value = value;
    }
  }

  ngOnInit() {
    if (!this.label) {
      throw new Error('Attribute label required');
    }

    this.inputSubscription = this.control.valueChanges
      .pipe(startWith(this.control.value), distinctUntilChanged())
      .subscribe(v => {
        this.value = v;
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.labels) {
      this.rangeLabelCssClasses = this.getRangeLabelCssClasses(
        changes.labels.currentValue
      );
      this.margin = `0 ${100 / (changes.labels.currentValue.length + 1.5) -
        2}%`;
    }
  }

  ngAfterViewInit() {
    this.renderFallbackTrack();
  }

  ngOnDestroy() {
    if (this.isBrowser) {
      const inlineStyle = document.getElementById(this.styleId);

      if (inlineStyle) {
        // ie
        inlineStyle.parentNode.removeChild(inlineStyle);
      }
    }

    // ssr - on application destroy subscriptions sometimes not available
    if (this.inputSubscription) {
      this.inputSubscription.unsubscribe();
    }
  }

  private updateCurrentLabel() {
    const displayLabels = this.labels && this.labels.length > 0;
    if (displayLabels) {
      this.currentLabelIndex = Math.min(
        Math.floor(this.value / this.max * this.labels.length),
        this.labels.length - 1
      );
      this.rangeLabelCssClasses = this.getRangeLabelCssClasses(this.labels);
    }
  }

  private getRangeLabelCssClasses(labels: string[]) {
    return labels.map((_label, index) => {
      const cssClasses: string[] = ['ngx-input-range__label'];

      if (index === this.currentLabelIndex) {
        cssClasses.push('ngx-input-range__label--current');
      }

      return cssClasses.join(' ');
    });
  }

  private renderFallbackTrack() {
    // Only Edge supports two tone track.
    // For Chrome and Firefox we use the following
    // We create a style tag dynamically since JS cannot change pseudo styles on a DOM element.

    if (this.isBrowser) {
      let inlineStyle = document.getElementById(this.styleId);
      const percent = (this.value - this.min) / (this.max - this.min) * 100;

      if (!inlineStyle) {
        inlineStyle = document.createElement('style');
        inlineStyle.id = `${this.instanceId}-style`;
        document.head.appendChild(inlineStyle);
      }

      inlineStyle.textContent = `
        #${
          this.instanceId
        }::-webkit-slider-runnable-track{background-size:${percent}% 100%}
        #${this.instanceId}::-moz-range-track{background-size:${percent}% 100%}
      `;
    }
  }
}
