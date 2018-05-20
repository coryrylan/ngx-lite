import { browser, by, element } from 'protractor';
import { defaultConfig } from './../../../projects/ngx-eq/src/public_api';

const scrollBarAndPaddingOffset = 100;

export class NgxEqPage {
  navigateTo() {
    return browser.get('/docs/eq');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-eq h1')).getText();
  }

  getFirstElement() {
    return element.all(by.css('[ngxeq]')).get(0);
  }

  setSmallBrowserSize() {
    browser
      .manage()
      .window()
      .setSize(defaultConfig.small + scrollBarAndPaddingOffset, 1024);
  }

  setMediumBrowserSize() {
    browser
      .manage()
      .window()
      .setSize(defaultConfig.medium + scrollBarAndPaddingOffset, 1024);
  }

  setLargeBrowserSize() {
    browser
      .manage()
      .window()
      .setSize(defaultConfig.large + scrollBarAndPaddingOffset, 1024);
  }

  setExtraLargeBrowserSize() {
    browser
      .manage()
      .window()
      .setSize(defaultConfig.extraLarge + scrollBarAndPaddingOffset, 1024);
  }
}
