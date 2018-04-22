import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  Output,
  EventEmitter,
  ViewEncapsulation,
  ChangeDetectorRef,
  PLATFORM_ID,
  Inject
} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'ngx-nav-drawer',
  templateUrl: './ngx-nav-drawer.component.html',
  styleUrls: ['./ngx-nav-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxNavDrawerComponent implements OnDestroy, OnInit {
  @Output() openChange = new EventEmitter<boolean>();
  @Input()
  set open(value: boolean) {
    this.show = value;
    this.openChange.emit(this.show);
  }
  @Input() fixed = false;
  @Input() fixedAtWidth = '1024px';

  show = false;
  fixedMode = false;
  private subscription: Subscription;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.setFixedPosition();
      this.subscription = fromEvent(window, 'resize').subscribe(event =>
        this.setFixedPosition()
      );
    }
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  setFixedPosition() {
    if (isPlatformBrowser(this.platformId)) {
      if (
        window.matchMedia(`(min-width: ${this.fixedAtWidth})`).matches &&
        this.fixed
      ) {
        this.fixedMode = true;
      } else {
        this.fixedMode = false;
      }

      this.changeDetectorRef.detectChanges();
    }
  }

  toggle() {
    if (!this.fixedMode) {
      this.show = !this.show;
      this.openChange.emit(this.show);
    }
  }
}
