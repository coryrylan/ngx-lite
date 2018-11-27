import {
  Component,
  Input,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild,
  OnDestroy
} from '@angular/core';

import { NgxMenuService } from './ngx-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-menu',
  templateUrl: './ngx-menu.component.html',
  styleUrls: ['./ngx-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxMenuComponent implements OnDestroy {
  @Input() hover = false;
  @ViewChild('menu') menu: ElementRef;
  visible = false;
  offsetHeight = 0;
  offsetLeft = 0;
  subscription: Subscription;

  constructor(private elementRef: ElementRef, private ngxMenuService: NgxMenuService) {
    this.subscription = this.ngxMenuService.visible.subscribe(v => this.visible = v);
  }

  toggle(event) {
    // todo: recalculate on resize
    const button = event.currentTarget;
    const menuWidth = this.menu.nativeElement.offsetWidth;
    const buttonOffsetLeft = button.offsetLeft;
    const buttonWidth = button.offsetWidth;

    this.ngxMenuService.visible.next(false);
    this.visible = !this.visible;
    this.offsetHeight = button.offsetTop + button.offsetHeight;

    if (menuWidth + buttonOffsetLeft > window.innerWidth) {
      this.offsetLeft = buttonOffsetLeft - menuWidth + buttonWidth;
    } else {
      this.offsetLeft = buttonOffsetLeft;
    }

    event.stopPropagation();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('document:click', ['$event'])
  handleClick(event: MouseEvent) {
    this.visible = false;
  }
}
