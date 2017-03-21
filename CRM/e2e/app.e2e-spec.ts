import { CRMPage } from './app.po';

describe('crm App', () => {
  let page: CRMPage;

  beforeEach(() => {
    page = new CRMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('SBC works!');
  });
});
