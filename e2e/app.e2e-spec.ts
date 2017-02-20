import { SomeAppPage } from './app.po';

describe('some-app App', function() {
  let page: SomeAppPage;

  beforeEach(() => {
    page = new SomeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
