import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'ngx-progress-bar',
  templateUrl: './ngx-progress-bar.component.html',
  styleUrls: ['./ngx-progress-bar.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxProgressBarComponent implements OnChanges {
  @Input() value: number;
  @Input() showValue = true;
  translate = 'translateX(0%)';

  ngOnChanges(changes: SimpleChanges) {
    this.translate = `translateX(${changes.value.currentValue}%)`;
  }
}
