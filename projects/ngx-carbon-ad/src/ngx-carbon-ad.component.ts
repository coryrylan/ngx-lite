import {
  Component,
  Input,
  OnInit,
  AfterViewInit,
  ElementRef,
  ViewEncapsulation,
  ChangeDetectionStrategy
} from '@angular/core';

@Component({
  selector: 'ngx-carbon-ad',
  templateUrl: './ngx-carbon-ad.component.html',
  styleUrls: ['./ngx-carbon-ad.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxCarbonAdComponent implements OnInit, AfterViewInit {
  @Input() placement = '';
  @Input() serve = '';
  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.async = true;
    s.id = '_carbonads_js';
    s.type = 'text/javascript';
    s.src = `//cdn.carbonads.com/carbon.js?serve=${this.serve}&placement=${
      this.placement
    }`;
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit() {}
}
