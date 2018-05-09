import { NgxEqPage } from './ngx-eq.po';

describe('ngx-eq', () => {
  let page: NgxEqPage;

  beforeEach(() => {
    page = new NgxEqPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('@ngx-lite/eq');
  });

  it('should apply the ngx-eq-sm class when the element is small', () => {
    page.setSmallBrowserSize();
    expect(page.getFirstElement().getAttribute('class')).toContain('test-row ngx-eq ngx-eq-xs ngx-eq-sm');
  });

  it('should apply the ngx-eq-md class when the element is medium', () => {
    page.setMediumBrowserSize();
    expect(page.getFirstElement().getAttribute('class')).toContain('test-row ngx-eq ngx-eq-xs ngx-eq-sm ngx-eq-md');
  });

  // disabled for now as this can break dependent on the dev machine
  // it('should apply the ngx-eq-lg class when the element is large', () => {
  //   page.setLargeBrowserSize();
  //   expect(page.getFirstElement().getAttribute('class')).toBe('test-row ngx-eq ngx-eq-sm ngx-eq-md ngx-eq-lg');
  // });

  // it('should apply the ngx-eq-xl class when the element is extra large', () => {
  //   page.setExtraLargeBrowserSize();
  //   expect(page.getFirstElement().getAttribute('class')).toBe('test-row ngx-eq ngx-eq-sm ngx-eq-md ngx-eq-lg ngx-eq-xl');
  // });
});
