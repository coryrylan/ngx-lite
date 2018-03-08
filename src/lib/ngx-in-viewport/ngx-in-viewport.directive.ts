import { Directive, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';
import { debounceTime, merge } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

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

  constructor(private readonly elementRef: ElementRef) { }

  ngOnInit() {
    if (window && document) {
      this.subscription = fromEvent(window, 'scroll')
        .pipe(
          merge(fromEvent(window, 'resize')),
          debounceTime(100)
        ).subscribe(() => this.check());
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
        this.elementRef.nativeElement.getBoundingClientRect().top <= window.innerHeight + this.offset,
    };

    this.inViewport.emit(event);
  }
}
