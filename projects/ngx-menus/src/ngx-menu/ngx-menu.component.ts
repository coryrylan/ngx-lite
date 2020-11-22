import {
  Component,
  Input,
  ViewEncapsulation,
  HostListener,
  ElementRef,
  ViewChild,
  OnDestroy,
} from '@angular/core';
import { KeyCodes } from '@ngx-lite/util';

import { NgxMenuService } from './ngx-menu.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'ngx-menu',
  templateUrl: './ngx-menu.component.html',
  styleUrls: ['./ngx-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class NgxMenuComponent implements OnDestroy {
  @Input() hover = false;
  @ViewChild('menu', { static: false }) menu?: ElementRef;
  visible = false;
  offsetHeight = 0;
  offsetLeft = 0;
  subscription: Subscription;

  constructor(private ngxMenuService: NgxMenuService) {
    this.subscription = this.ngxMenuService.visible.subscribe(
      (v) => (this.visible = v)
    );
  }

  toggle(event: any) {
    // todo:
    // - recalculate on resize
    // - trap focus in menu with arrow key navigation
    const button = event.currentTarget;
    const menuWidth = this.menu?.nativeElement.offsetWidth;
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

  @HostListener('document:click')
  outerClick() {
    this.visible = false;
  }

  @HostListener('window:keyup', ['$event'])
  outerTab(event: any) {
    if (
      (event.keyCode === KeyCodes.Tab || event.keyCode === KeyCodes.Escape) &&
      this.visible === true
    ) {
      this.visible = false;
    }
  }
}
