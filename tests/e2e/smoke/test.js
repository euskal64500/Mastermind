const { expect } = require('chai');
// import Board from '../pages/board.page';
// const MenuPage = require('../pages/menu.page');
// const PopupPage = require('../pages/popup.page');

describe('Peg related tests', function () {
  this.timeout(3000);
  const PegIds = new Array(96).fill(undefined).map((_, i) => `Peg${i + 1}`);
  const GuessIds = new Array(48).fill(undefined).map((_, i) => `Peg${i + 1}`);
  // const FeedbackIds = new Array(48).fill(undefined).map((_, i) => `Peg${i + 48}`);

  PegIds.forEach(PegId => {
    it(`expects the inital color of ${PegId} to be transparent`, function () {
      const pegColor = browser.getText(`~${PegId}`);
      expect(pegColor).to.be.a('string');
      expect(pegColor).to.equal('transparent');
    });
  });

  // GuessIds.reverse().forEach(GuessId => {
  //   it.only(`verify that ${GuessId} color changes when clicked`, function () {
  //     const pegColor = browser.getText(`~${GuessId}`);
  //     expect(pegColor).to.equal('transparent');
  //     browser.touchAction(`~${GuessId}`, 'tap');
  //     expect(pegColor).to.equal('blue');
  //   });
  // });
});
