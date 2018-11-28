import {
  Component,
  ElementRef,
  EventEmitter,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  TemplateRef,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  trapTabFocus,
  lockScroll,
  unlockScroll,
  ariaHideBody,
  ariaShowBody,
  KeyCodes
} from '@ngx-lite/util';

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxModalComponent implements OnChanges, OnDestroy {
  @Input() closable = true;
  @Input() type = '';
  @Input() large = false;
  @Input() visible: boolean;
  @Input() templateRef: TemplateRef<any>;
  @Output()
  readonly visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  private lastFocusedElement: HTMLElement;

  constructor(private elementRef: ElementRef) {}

  ngOnChanges(changes: SimpleChanges) {
    const visible = changes.visible.currentValue;

    if (visible) {
      lockScroll();
      ariaHideBody();
      setTimeout(() => trapTabFocus(this.elementRef.nativeElement), 0); // todo: need to hook into the proper lifecycle
    } else {
      unlockScroll();
      ariaShowBody();
    }

    this.visibleChange.emit(this.visible);
  }

  ngOnDestroy() {
    this.cleanUpDOM();
  }

  @HostListener('document:click', ['$event'])
  rootClick(event) {
    if (event && event.target) {
      this.lastFocusedElement = event.target;
    }
  }

  @HostListener('window:keyup', ['$event'])
  closeOnEscape(event: KeyboardEvent) {
    const closable = this.closable && event.keyCode === KeyCodes.Escape;

    if (closable) {
      this.close();
    }
  }

  closeOnClick(event?: MouseEvent) {
    const closable =
      this.closable &&
      event &&
      (event.target as HTMLElement).className.includes(
        'ngx-modal-closable-target'
      );

    if (closable) {
      this.close();
    }
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
    this.cleanUpDOM();
  }

  private cleanUpDOM() {
    unlockScroll();
    ariaShowBody();
    this.focusLastFocusedElement();
  }

  private focusLastFocusedElement() {
    if (this.lastFocusedElement) {
      this.lastFocusedElement.focus();
    }
  }
}
