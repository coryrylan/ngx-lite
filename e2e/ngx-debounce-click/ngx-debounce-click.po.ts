import { browser, by, element } from 'protractor';

export class NgxDebounceClickPage {
  navigateTo() {
    return browser.get('/docs/ngx-debounce-click');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-debounce-click h1')).getText();
  }

  getRegularButton() {
    return element.all(by.css('app-docs-ngx-debounce-click button')).get(0);
  }

  getDebouncedButton() {
    return element.all(by.css('app-docs-ngx-debounce-click button')).get(1);
  }

  getCounter() {
    return element(by.css('app-docs-ngx-debounce-click div'));
  }
}
