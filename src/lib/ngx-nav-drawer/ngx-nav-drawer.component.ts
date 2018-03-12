import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnInit, OnDestroy, Output, EventEmitter, ViewEncapsulation, ChangeDetectorRef } from '@angular/core';
import { fromEvent } from 'rxjs/observable/fromEvent';

@Component({
  selector: 'ngx-nav-drawer',
  templateUrl: './ngx-nav-drawer.component.html',
  styleUrls: ['./ngx-nav-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxNavDrawerComponent implements OnDestroy, OnInit {
  @Output() openChange = new EventEmitter<boolean>();
  @Input() set open(value: boolean) {
    this.show = value;
    this.openChange.emit(this.show);
  }
  @Input() fixed = false;
  @Input() fixedAtWidth = '1024px';

  show = false;
  fixedMode = false;
  private subscription: Subscription;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.setFixedPosition();
    this.subscription = fromEvent(window, 'resize').subscribe(event => this.setFixedPosition());
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  setFixedPosition() {
    if (window && window.matchMedia(`(min-width: ${this.fixedAtWidth})`).matches && this.fixed) {
      this.fixedMode = true;
    } else {
      this.fixedMode = false;
    }

    this.changeDetectorRef.detectChanges();
  }

  toggle() {
    if (!this.fixedMode) {
      this.show = !this.show;
      this.openChange.emit(this.show);
    }
  }
}
