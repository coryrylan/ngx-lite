import { browser, by, element } from 'protractor';

export class NgxLoadersPage {
  navigateTo() {
    return browser.get('/docs/loaders');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-loaders h1')).getText();
  }
}
