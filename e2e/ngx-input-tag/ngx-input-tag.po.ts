import { browser, by, element } from 'protractor';

export class NgxInputTagPage {
  navigateTo() {
    return browser.get('/docs/ngx-input-tag');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-input-tag h1')).getText();
  }
}
