import {
  Component,
  Input,
  OnInit,
  SimpleChanges,
  OnChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ngx-progress-circle',
  templateUrl: './ngx-progress-circle.component.html',
  styleUrls: ['./ngx-progress-circle.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxProgressCircleComponent implements OnInit, OnChanges {
  @Input() value: number;
  @Input() symbol = '%';
  @Input() label = 'complete';
  @Input() valueLabel: string = null;

  radius = 74;
  circumference = 2 * Math.PI * this.radius;
  dashoffset: number;

  ngOnInit() {
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
