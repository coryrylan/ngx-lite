import { NgxInputSwitchPage } from './ngx-input-switch.po';

describe('ngx-input-switch', () => {
  let page: NgxInputSwitchPage;

  beforeEach(() => {
    page = new NgxInputSwitchPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('ngx-input-switch');
  });
});
