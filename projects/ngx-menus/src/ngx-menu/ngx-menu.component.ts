import {
  Component,
  EventEmitter,
  Input,
  Output,
  ViewEncapsulation,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'ngx-menu',
  templateUrl: './ngx-menu.component.html',
  styleUrls: ['./ngx-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxMenuComponent {
  @Input() hover = false;
  @ViewChild('menu') menu: ElementRef;
  visible = false;
  offsetHeight = 0;
  offsetLeft = 0;

  constructor(private elementRef: ElementRef) {}

  toggle(event) {
    // todo: recalculate on resize
    this.visible = !this.visible;
    this.offsetHeight = event.target.offsetTop + event.target.offsetHeight;

    const menuWidth = this.menu.nativeElement.offsetWidth;
    const buttonOffsetLeft = event.target.offsetLeft;
    const buttonWidth = event.target.offsetWidth;

    if (menuWidth + buttonOffsetLeft > window.innerWidth) {
      this.offsetLeft = buttonOffsetLeft - menuWidth + buttonWidth;
    } else {
      this.offsetLeft = buttonOffsetLeft;
    }

    event.stopPropagation();
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    this.visible = false;
  }
}
