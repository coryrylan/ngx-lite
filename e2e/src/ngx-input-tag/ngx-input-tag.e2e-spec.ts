import { NgxInputTagPage } from './ngx-input-tag.po';

describe('ngx-input-tag', () => {
  let page: NgxInputTagPage;

  beforeEach(() => {
    page = new NgxInputTagPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('@ngx-lite/input-tag');
  });
});
