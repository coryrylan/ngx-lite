import { NgxInViewportPage } from './ngx-in-viewport.po';

describe('ngx-in-viewport', () => {
  let page: NgxInViewportPage;

  beforeEach(() => {
    page = new NgxInViewportPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('@ngx-lite/in-viewport');
  });

  it('should emit an event when the directive enters or leaves the viewport', () => {
    page.scrollToDirective();
    expect(page.getCount()).toBe('1');
    page.scrollToCount();
    expect(page.getCount()).toBe('2');
  });
});
