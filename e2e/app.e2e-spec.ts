import { Angular2DragDropTreePage } from './app.po';

describe('angular2-drag-drop-tree App', function() {
  let page: Angular2DragDropTreePage;

  beforeEach(() => {
    page = new Angular2DragDropTreePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
