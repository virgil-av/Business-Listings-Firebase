import { App4Page } from './app.po';

describe('app-4 App', function() {
  let page: App4Page;

  beforeEach(() => {
    page = new App4Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
