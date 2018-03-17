import { browser, by, element } from 'protractor';

export class NgxJsonLdPage {
  navigateTo() {
    return browser.get('/docs/ngx-json-ld');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-json-ld h1')).getText();
  }
}
