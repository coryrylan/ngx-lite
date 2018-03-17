import { NgxNavDrawerPage } from './ngx-nav-drawer.po';

describe('ngx-loaders', () => {
  let page: NgxNavDrawerPage;

  beforeEach(() => {
    page = new NgxNavDrawerPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('ngx-nav-drawer');
  });
});
