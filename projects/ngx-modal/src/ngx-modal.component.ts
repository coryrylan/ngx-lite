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
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import { trapFocus, KeyCodes } from './util';

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxModalComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('closeButton') closeButton: ElementRef;
  @Input() closable = true;
  @Input() type = '';
  @Input() large = false;
  @Input() visible: boolean;
  @Input() templateRef: TemplateRef<any>;
  @Output()
  readonly visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  private lastFocusedElement: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {}

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

  @HostListener('document:click', ['$event'])
  rootClick(event) {
    this.lastFocusedElement = event.target;
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if (this.closable && event.keyCode === KeyCodes.Escape) {
      this.close();
    }
  }

  closeClick(event?: MouseEvent) {
    if (
      this.closable &&
      event &&
      (event.target as HTMLElement).className.includes(
        'ngx-modal-closable-target'
      )
    ) {
      this.close();
    }
  }

  private close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    unlockScroll();
    ariaShowBody();
    this.lastFocusedElement.focus();
  }
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
