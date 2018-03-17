import { NgxLoadersPage } from './ngx-loaders.po';

describe('ngx-loaders', () => {
  let page: NgxLoadersPage;

  beforeEach(() => {
    page = new NgxLoadersPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('ngx-loaders');
  });
});
