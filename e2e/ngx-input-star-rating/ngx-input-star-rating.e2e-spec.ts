import { NgxInputStarRatingPage } from './ngx-input-star-rating.po';

describe('ngx-input-star-rating', () => {
  let page: NgxInputStarRatingPage;

  beforeEach(() => {
    page = new NgxInputStarRatingPage();
  });

  it('should display heading', () => {
    page.navigateTo();
    expect(page.getPageHeading()).toEqual('ngx-input-star-rating');
  });
});
