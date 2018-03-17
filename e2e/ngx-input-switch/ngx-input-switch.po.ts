import { browser, by, element } from 'protractor';

export class NgxInputSwitchPage {
  navigateTo() {
    return browser.get('/docs/ngx-input-switch');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-input-switch h1')).getText();
  }
}
