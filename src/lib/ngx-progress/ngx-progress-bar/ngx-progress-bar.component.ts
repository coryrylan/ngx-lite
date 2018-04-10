import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: './ngx-progress-bar.component.html',
  styleUrls: ['./ngx-progress-bar.component.scss']
})
export class NgxProgressBarComponent implements OnChanges {
  @Input() value: number;
  @Input() showValue = true;
  translate = 'translateX(0%)';

  ngOnChanges(changes: SimpleChanges) {
    this.translate = `translateX(${changes.value.currentValue}%)`;
  }
}
