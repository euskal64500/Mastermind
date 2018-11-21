// const { expect } = require('chai').expect;
import Board from '../pages/board.page';
// const MenuPage = require('../pages/menu.page');
// const PopupPage = require('../pages/popup.page');

describe('Peg related tests', function () {
  it('verify active peg color change', function () {
    console.log(browser.options);
    Board.click('Peg46');
  });
});
