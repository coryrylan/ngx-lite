import { Component, Input, OnInit, AfterViewInit, ElementRef, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'ngx-carbon-ad',
  templateUrl: './ngx-carbon-ad.component.html',
  styleUrls: ['./ngx-carbon-ad.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgxCarbonAdComponent implements OnInit, AfterViewInit {
  @Input() siteName = '';
  constructor(private elementRef: ElementRef) {
  }

  ngAfterViewInit() {
    const s = document.createElement('script');
    s.async = true;
    s.id = '_carbonads_js';
    s.type = 'text/javascript';
    s.src = `//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=${this.siteName}`;
    this.elementRef.nativeElement.appendChild(s);
  }

  ngOnInit() {
  }
}
