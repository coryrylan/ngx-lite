import { NgxJsonLdPage } from './ngx-json-ld.po';

describe('ngx-json-ld', () => {
  let page: NgxJsonLdPage;

  beforeEach(() => {
    page = new NgxJsonLdPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('@ngx-lite/json-ld');
  });
});
