import { NgxDebounceClickPage } from './ngx-debounce-click.po';

describe('ngx-debounce-click', () => {
  let page: NgxDebounceClickPage;

  beforeEach(() => {
    page = new NgxDebounceClickPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('ngx-debounce-click');
  });

  it('should debounce the click event', () => {
    page.navigateTo();
    const regularButton = page.getRegularButton();
    const debouncedButton = page.getDebouncedButton();

    regularButton.click();
    debouncedButton.click();
    // need to force delay
    expect(page.getCounter().getText()).toBe('2');
  });
});
