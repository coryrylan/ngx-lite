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
  ViewChild,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

import {
  trapFocus,
  lockScroll,
  unlockScroll,
  ariaHideBody,
  ariaShowBody,
  KeyCodes
} from './util';

@Component({
  selector: 'ngx-modal',
  templateUrl: './ngx-modal.component.html',
  styleUrls: ['./ngx-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxModalComponent implements OnChanges, OnDestroy {
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

  ngOnChanges(changes: SimpleChanges) {
    const visible = changes.visible.currentValue;

    if (visible) {
      lockScroll();
      ariaHideBody();
      setTimeout(() => trapFocus(this.elementRef.nativeElement), 0); // todo: need to hook into the proper lifecycle
    } else {
      unlockScroll();
      ariaShowBody();
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
