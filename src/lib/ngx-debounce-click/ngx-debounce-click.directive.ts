import { Directive, EventEmitter, HostListener, Input, Inject, OnInit, OnDestroy, Output, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Subject } from 'rxjs/Subject';
import { debounceTime } from 'rxjs/operators';
import { Subscription } from 'rxjs/Subscription';

@Directive({
  selector: '[ngxDebounceClick]'
})
export class NgxDebounceClickDirective implements OnInit, OnDestroy {
  @Input() debounceTime = 500;
  @Output() readonly debouncedClick = new EventEmitter<MouseEvent>();
  private readonly clicks = new Subject<MouseEvent>();
  private subscription: Subscription;
  private isBrowser = false;

  constructor(@Inject(PLATFORM_ID) platformId: string) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {
    this.listenToClicks();
  }

  @HostListener('click', ['$event'])
  clickEvent(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    this.clicks.next(event);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  private listenToClicks() {
    this.subscription = this.clicks
      .pipe(debounceTime(this.debounceTime))
      .subscribe(event => this.debouncedClick.emit(event));
  }
}
