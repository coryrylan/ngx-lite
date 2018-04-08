import {
  Component, EventEmitter, Host, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef, ViewEncapsulation
} from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-tabs',
  templateUrl: './ngx-tabs.component.html',
  styleUrls: ['./ngx-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxTabsComponent implements OnInit, OnChanges {
  @Input() activeTabIndex = 0;
  @Input() neutral = false;
  @Output() readonly activeTabIndexChange = new EventEmitter<number>();
  @Output() readonly tabChange = new EventEmitter();

  readonly tabs: NgxTabComponent[] = [];

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    this.setActiveTab(this.tabs[changes.activeTabIndex.currentValue]);
  }

  selectTab(tab: NgxTabComponent) {
    this.setActiveTab(tab);
    this.activeTabIndexChange.emit(this.tabs.indexOf(tab));
  }

  addTab(tab: NgxTabComponent) {
    this.tabs.push(tab);
  }

  private setActiveTab(activeTab: NgxTabComponent) {
    for (const tab of this.tabs) {
      tab.active = false;
    }

    activeTab.active = true;
  }
}

@Component({
  selector: 'ngx-tab',
  template: `
    <div *ngIf="active && !templateRef" class="app-tab__content">
      <ng-content></ng-content>
    </div>
    <div *ngIf="active && templateRef" class="app-tab__content">
      <ng-template [ngTemplateOutlet]="templateRef"></ng-template>
    </div>
  `
})
export class NgxTabComponent {
  @Input() name: string;
  @Input() active = false;
  @Input() templateRef: TemplateRef<any>;

  constructor(@Host() tabsComponent: NgxTabsComponent) {
    tabsComponent.addTab(this);
  }
}
