import { NewsAngularPage } from './app.po';

describe('news-angular App', () => {
  let page: NewsAngularPage;

  beforeEach(() => {
    page = new NewsAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
