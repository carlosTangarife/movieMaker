import { MovieCornerPage } from './app.po';

describe('movie-corner App', () => {
  let page: MovieCornerPage;

  beforeEach(() => {
    page = new MovieCornerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
