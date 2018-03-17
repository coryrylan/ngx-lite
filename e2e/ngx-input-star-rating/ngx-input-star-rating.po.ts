import { browser, by, element } from 'protractor';

export class NgxInputStarRatingPage {
  navigateTo() {
    return browser.get('/docs/ngx-input-star-rating');
  }

  getPageHeading() {
    return element(by.css('app-docs-ngx-input-star-rating h1')).getText();
  }
}
