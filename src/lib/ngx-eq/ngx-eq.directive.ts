import { Directive, ElementRef, HostBinding, OnDestroy, ChangeDetectorRef, Inject } from '@angular/core';
import ResizeObserver from 'resize-observer-polyfill';

import { Config } from './ngx-eq.module';

@Directive({
  selector: '[ngxEQ]'
})
export class NgxEqDirective implements OnDestroy {
  @HostBinding('class.ngx-eq') ngxEQ = true;
  @HostBinding('class.ngx-eq-sm') small = false;
  @HostBinding('class.ngx-eq-md') medium = false;
  @HostBinding('class.ngx-eq-lg') large = false;
  @HostBinding('class.ngx-eq-xl') extraLarge = false;
  changes: any;

  constructor(private readonly elementRef: ElementRef, private ref: ChangeDetectorRef, @Inject('config') private config: Config) {
    const element = this.elementRef.nativeElement;

    this.changes = new ResizeObserver(entries => {
      for (const entry of entries) {
        const width = entry.contentRect.width;
        this.reset();

        if (width >= config.small) {
          this.small = true;
        }

        if (width >= config.medium) {
          this.medium = true;
        }

        if (width >= config.large) {
          this.large = true;
        }

        if (width >= config.extraLarge) {
          this.extraLarge = true;
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
    this.small = false;
    this.medium = false;
    this.large = false;
    this.extraLarge = false;
  }
}
