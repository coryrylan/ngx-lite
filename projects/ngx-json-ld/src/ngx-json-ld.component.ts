import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'ngx-json-ld',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxJsonLdComponent {
  @Input()
  set json(currentValue: {}) {
    this.jsonLD = this.getSafeHTML(currentValue);
  }
  @HostBinding('innerHTML') jsonLD: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  getSafeHTML(value: {}) {
    const json = value
      ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>')
      : '';
    const html = `<script type="application/ld+json">${json}</script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
