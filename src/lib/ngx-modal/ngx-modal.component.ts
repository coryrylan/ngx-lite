import { element } from 'protractor';
import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  TemplateRef,
  ViewChild,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

export enum KeyCodes {
  LeftArrow = 37,
  UpArrow = 38,
  RightArrow = 39,
  DownArrow = 40,
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Escape = 27
}

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxModalComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('closeButton') closeButton: ElementRef;
  @Input() closable = true;
  @Input() type = '';
  @Input() large = false;
  @Input() visible: boolean;
  @Input() templateRef: TemplateRef<any>;
  @Output() readonly visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private elementRef: ElementRef) { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    const visible = changes.visible.currentValue;

    if (visible) {
      lockScroll();
      ariaHideBody();
      setTimeout(() => trapFocus(this.elementRef.nativeElement), 0); // need to hook into the proper lifcycle
    }

    this.visibleChange.emit(this.visible);
  }

  ngOnDestroy() {
    unlockScroll();
    ariaShowBody();
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.closable && event.keyCode === KeyCodes.Escape) {
      this.close();
    }
  }

  closeClick(event?: MouseEvent) {
    if (this.closable && event && (event.target as HTMLElement).className.includes('ngx-modal-closable-target')) {
      this.close();
    }
  }

  private close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    unlockScroll();
    ariaShowBody();
  }
}

function trapFocus(elm: HTMLElement) {
  const focusableEls = elm.querySelectorAll('a, object, input, button, iframe, [tabindex]');
  const firstFocusableEl = focusableEls[0];
  const lastFocusableEl = focusableEls[focusableEls.length - 1];

  elm.addEventListener('keydown', (e) => { // need to clean up events
    const isTabPressed = (e.key === 'Tab' || e.keyCode === KeyCodes.Tab);

    if (!isTabPressed) {
      return;
    }

    if (e.shiftKey && document.activeElement === firstFocusableEl) {
      (lastFocusableEl as any).focus();
      e.preventDefault();
    } else {
      if (document.activeElement === lastFocusableEl) {
        (firstFocusableEl as any).focus();
        e.preventDefault();
      }
    }
  });
}

function lockScroll() {
  document.body.style.overflow = 'hidden';
}

function unlockScroll() {
  document.body.style.overflow = 'initial';
}

function ariaHideBody() {
  document.body.setAttribute('aria-hidden', 'true');
}

function ariaShowBody() {
  document.body.setAttribute('aria-hidden', 'false');
}


