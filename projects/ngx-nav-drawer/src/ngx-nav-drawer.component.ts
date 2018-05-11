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
  Inject,
  HostListener,
  ViewChild,
  ElementRef,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { fromEvent, Subscription } from 'rxjs';

import { trapFocus, KeyCodes } from './util';

@Component({
  selector: 'ngx-nav-drawer',
  templateUrl: './ngx-nav-drawer.component.html',
  styleUrls: ['./ngx-nav-drawer.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxNavDrawerComponent implements OnChanges, OnDestroy, OnInit {
  @Output() openChange = new EventEmitter<boolean>();
  @Input()
  set open(value: boolean) {
    this.show = value;
    this.openChange.emit(this.show);
  }

  @Input() fixed = false;
  @Input() fixedAtWidth = '1024px';
  @ViewChild('nav') nav: ElementRef;

  show = false;
  fixedMode = false;
  private subscription: Subscription;
  private lastFocusedElement: HTMLElement;

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

  @HostListener('document:click', ['$event'])
  rootClick(event) {
    this.lastFocusedElement = event.target;
  }

  ngOnChanges() {
    this.focus();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  @HostListener('window:keyup', ['$event'])
  outerClick(event) {
    if (event.keyCode === KeyCodes.Escape && this.show === true) {
      this.toggle();
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

    this.focus();
  }

  focus() {
    if (this.show) {
      trapFocus(this.nav.nativeElement);
    } else if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }
}
