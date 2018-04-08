import { AppPage } from './app.po';

describe('ngx-lite App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('A collection of standalone Angular libraries in a single mono repo.');
  });
});
