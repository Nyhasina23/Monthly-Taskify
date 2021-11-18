import { Taskify } from './app.po';

describe('taskify App', () => {
  let page: Taskify;

  beforeEach(() => {
    page = new Taskify();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
