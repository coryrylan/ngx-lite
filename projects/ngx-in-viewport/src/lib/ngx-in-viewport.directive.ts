import {
  Directive,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, merge } from 'rxjs/operators';

export interface InViewportEvent {
  target: HTMLElement;
  value: boolean;
}

@Directive({
  selector: '[ngxInViewport]'
})
export class NgxInViewportDirective implements OnInit, OnDestroy {
  @Input() offset = 0;
  @Output() readonly inViewport = new EventEmitter<InViewportEvent>();
  private subscription: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private readonly elementRef: ElementRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.subscription = fromEvent(window, 'scroll')
        .pipe(merge(fromEvent(window, 'resize')), debounceTime(100))
        .subscribe(() => this.check());
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private check() {
    const event: InViewportEvent = {
      target: this.elementRef.nativeElement,
      value:
        document.body.contains(this.elementRef.nativeElement) &&
        this.elementRef.nativeElement.getBoundingClientRect().top <=
          window.innerHeight + this.offset
    };

    this.inViewport.emit(event);
  }
}
