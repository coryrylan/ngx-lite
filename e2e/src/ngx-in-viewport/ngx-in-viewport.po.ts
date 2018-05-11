import { browser, by, element } from 'protractor';

export class NgxInViewportPage {
  navigateTo() {
    return browser.get('/docs/in-viewport');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-in-viewport h1')).getText();
  }

  getCount() {
    return element(by.css('app-docs-ngx-in-viewport .e2e-count')).getText();
  }

  scrollToDirective() {
    browser
      .actions()
      .mouseMove(element(by.css('app-docs-ngx-in-viewport [ngxinviewport]')))
      .perform();
  }

  scrollToCount() {
    browser
      .actions()
      .mouseMove(element(by.css('app-docs-ngx-in-viewport .e2e-count')))
      .perform();
  }
}
