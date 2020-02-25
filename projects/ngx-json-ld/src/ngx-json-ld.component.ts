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

  //#region Json
  private _json: any = {};
  get json() {
    return this._json;
  }
  @Input() set json(value: {}) {
    this._json = value;
    this.updateJsonLd();
  }
  //#endregion
  //#region Minify
  private _minify: boolean = false;
  get minify() {
    return this._minify;
  }
  @Input() set minify(value: boolean) {
    this._minify = value;
    this.updateJsonLd();
  }
  //#endregion

  @HostBinding('innerHTML') jsonLD: SafeHtml;
  constructor(private sanitizer: DomSanitizer) {}

  private updateJsonLd() {
    this.jsonLD = this.getSafeHTML(this._json, this._minify);
  }

  private getSafeHTML(value: {}, minify: boolean) {
    let json = null;
    if (minify === true) {
      json = value
        ? JSON.stringify(value).replace(/<\/script>/g, '<\\/script>')
        : '';
    } else {
      json = value
        ? JSON.stringify(value, null, 2).replace(/<\/script>/g, '<\\/script>')
        : '';
    }
    const html = `<script type="application/ld+json">${json}</script>`;
    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
