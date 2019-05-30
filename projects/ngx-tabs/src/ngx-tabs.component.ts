import {
  Component,
  EventEmitter,
  Host,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'ngx-tabs',
  templateUrl: './ngx-tabs.component.html',
  styleUrls: ['./ngx-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTabsComponent implements OnChanges {
  @Input() activeTabIndex = 0;
  @Output() readonly activeTabIndexChange = new EventEmitter<number>();
  @Output() readonly tabChange = new EventEmitter();

  readonly tabs: NgxTabComponent[] = [];

  ngOnChanges(changes: SimpleChanges) {
    if (changes.activeTabIndex) {
      this.setActiveTab(this.tabs[changes.activeTabIndex.currentValue]);
    }
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
    <div *ngIf="active && !templateRef" class="ngx-tab__content">
      <ng-content></ng-content>
    </div>
    <div *ngIf="active && templateRef" class="ngx-tab__content">
      <ng-template [ngTemplateOutlet]="templateRef"></ng-template>
    </div>
  `,
  encapsulation: ViewEncapsulation.None
})
export class NgxTabComponent {
  @Input() name: string;
  @Input() active = false;
  @Input() templateRef: TemplateRef<any>;

  constructor(@Host() tabsComponent: NgxTabsComponent) {
    tabsComponent.addTab(this);
  }
}

@Component({
  selector: 'ngx-tab-routes',
  template: `
    <div class="ngx-tabs">
      <div class="ngx-tabs__nav">
        <a
          *ngFor="let tab of tabs; let i = index"
          [routerLink]="tab.path"
          routerLinkActive="active"
          [routerLinkActiveOptions]="{ exact: true }"
        >
          {{ tab.name }}
        </a>
      </div>
      <div class="ngx-tab__content">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styleUrls: ['./ngx-tabs.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxTabRoutesComponent {
  @Input() tabs: { name: string; path: string }[] = [];
}
