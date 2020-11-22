import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: './ngx-progress-bar.component.html',
  styleUrls: ['./ngx-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxProgressBarComponent implements OnChanges {
  @Input() value: number | null = 0;
  @Input() showValue = true;
  translate = 'translateX(0%)';

  ngOnChanges(changes: SimpleChanges) {
    this.translate = `translateX(${changes.value.currentValue}%)`;
  }
}
