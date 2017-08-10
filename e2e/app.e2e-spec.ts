import { Day1Page } from './app.po';

describe('day1 App', () => {
  let page: Day1Page;

  beforeEach(() => {
    page = new Day1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
