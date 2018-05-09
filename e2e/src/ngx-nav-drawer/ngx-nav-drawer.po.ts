import { browser, by, element } from 'protractor';

export class NgxNavDrawerPage {
  navigateTo() {
    return browser.get('/docs/nav-drawer');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-nav-drawer h1')).getText();
  }
}
