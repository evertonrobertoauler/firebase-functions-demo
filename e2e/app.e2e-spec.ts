import { FirebaseFunctionsDemoPage } from './app.po';

describe('firebase-functions-demo App', () => {
  let page: FirebaseFunctionsDemoPage;

  beforeEach(() => {
    page = new FirebaseFunctionsDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
