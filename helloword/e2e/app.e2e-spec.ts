import { HellowordPage } from './app.po';

describe('helloword App', () => {
  let page: HellowordPage;

  beforeEach(() => {
    page = new HellowordPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
