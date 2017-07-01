import { NgGlogPage } from './app.po';

describe('ng-glog App', () => {
  let page: NgGlogPage;

  beforeEach(() => {
    page = new NgGlogPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
