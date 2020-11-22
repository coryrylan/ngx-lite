import {
  Component,
  Input,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ngx-progress-circle',
  templateUrl: './ngx-progress-circle.component.html',
  styleUrls: ['./ngx-progress-circle.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxProgressCircleComponent implements OnChanges {
  @Input() value: number | null = 0;
  @Input() symbol = '%';
  @Input() label = 'complete';
  @Input() valueLabel = '';

  radius = 74;
  circumference = 2 * Math.PI * this.radius;
  dashoffset = 0;

  constructor() {
    this.progress(0);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.progress(changes.value.currentValue);
  }

  private progress(value: number) {
    const progress = value / 100;
    this.dashoffset = this.circumference * (1 - progress);
  }
}
