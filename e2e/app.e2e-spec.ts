import { EsportsMerchPage } from './app.po';

describe('esports-merch App', function() {
  let page: EsportsMerchPage;

  beforeEach(() => {
    page = new EsportsMerchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
