import { Component, OnInit, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngx-menu',
  templateUrl: './ngx-menu.component.html',
  styleUrls: ['./ngx-menu.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxMenuComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
