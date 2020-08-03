import {
  Directive,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  OnDestroy,
  Output
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[ngxDebounceClick]'
})
export class NgxDebounceClickDirective implements OnInit, OnDestroy {
  @Input() debounceTime = 500;
  @Output() readonly debouncedClick = new EventEmitter<MouseEvent>();
  private readonly clicks = new Subject<MouseEvent>();
  private subscription: Subscription;

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
