import { AgGridBasicsPage } from './app.po';

describe('ag-grid-basics App', () => {
  let page: AgGridBasicsPage;

  beforeEach(() => {
    page = new AgGridBasicsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
