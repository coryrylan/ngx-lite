import { Directive, ElementRef, HostBinding, Input, OnDestroy, ChangeDetectorRef, Inject } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

import { Config } from './ngx-eq.module';

@Directive({
  selector: '[ngxEQ]'
})
export class NgxEqDirective implements OnDestroy {
  @HostBinding('class.ngx-eq') ngxEQ = true;
  @HostBinding('class.ngx-eq-xs') extraSmallClass = false;
  @HostBinding('class.ngx-eq-sm') smallClass = false;
  @HostBinding('class.ngx-eq-md') mediumClass = false;
  @HostBinding('class.ngx-eq-lg') largeClass = false;
  @HostBinding('class.ngx-eq-xl') extraLargeClass = false;
  @Input() extraSmall = this.config.extraSmall;
  @Input() small = this.config.small;
  @Input() medium = this.config.medium;
  @Input() large = this.config.large;
  @Input() extraLarge = this.config.extraLarge;
  changes: any;

  constructor(private readonly elementRef: ElementRef, private ref: ChangeDetectorRef, @Inject('config') private config: Config) {
    const element = this.elementRef.nativeElement;

    this.changes = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.reset();

        if (width >= this.extraSmall) {
          this.extraSmallClass = true;
        }

        if (width >= this.small) {
          this.smallClass = true;
        }

        if (width >= this.medium) {
          this.mediumClass = true;
        }

        if (width >= this.large) {
          this.largeClass = true;
        }

        if (width >= this.extraLarge) {
          this.extraLargeClass = true;
        }
      }

      this.ref.detectChanges();
    });

    this.changes.observe(element);
  }

  ngOnDestroy() {
    this.changes.disconnect();
  }

  private reset() {
    this.extraSmallClass = false;
    this.smallClass = false;
    this.mediumClass = false;
    this.largeClass = false;
    this.extraLargeClass = false;
  }
}
