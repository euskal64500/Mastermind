const { expect } = require('chai');
const { pegIds, pegColors } = require('./ui');

// import Board from '../pages/board.page';
// const MenuPage = require('../pages/menu.page');
// const PopupPage = require('../pages/popup.page');

describe('Peg related tests', function () {
  this.timeout(30000);

  pegIds.forEach(PegId => {
    it(`expects the inital color of ${PegId} to be transparent`, function () {
      const pegColor = browser.getText(`~${PegId}`);
      expect(pegColor).to.be.a('string');
      expect(pegColor).to.equal('transparent');
    });
  });

  it(`expects peg color change to change from transparent to ${pegColors.join('->')}`, function () {
    let pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('transparent');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('blue');
    console.log('Peg color changed to blue');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('green');
    console.log('Peg color changed to green');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('gold');
    console.log('Peg color changed to gold');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('pink');
    console.log('Peg color changed to pink');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('ivory');
    console.log('Peg color changed to ivory');

    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('brown');
    console.log('Peg color changed to brown');
  });

  it('checks that a good combination opens the lock', function () {
    const isShieldClosed = browser.isExisting('~lock');
    expect(isShieldClosed).to.be.true;

    browser.touchAction('~Peg45', 'tap');
    let pegColor = browser.getText('~Peg45');
    expect(pegColor).to.equal('blue');

    browser.touchAction('~Peg46', 'tap');
    browser.touchAction('~Peg46', 'tap');
    browser.touchAction('~Peg46', 'tap');
    browser.touchAction('~Peg46', 'tap');
    pegColor = browser.getText('~Peg46');
    expect(pegColor).to.equal('pink');

    browser.touchAction('~Peg47', 'tap');
    browser.touchAction('~Peg47', 'tap');
    browser.touchAction('~Peg47', 'tap');
    pegColor = browser.getText('~Peg47');
    expect(pegColor).to.equal('gold');

    browser.touchAction('~Peg48', 'tap');
    browser.touchAction('~Peg48', 'tap');
    pegColor = browser.getText('~Peg48');
    expect(pegColor).to.equal('green');

    browser.touchAction('~lock', 'tap');
    const isShieldOpened = browser.isExisting('~openShield');
    expect(isShieldOpened).to.be.true;

    pegColor = browser.getText('~Peg93');
    expect(pegColor).to.equal('black');

    pegColor = browser.getText('~Peg94');
    expect(pegColor).to.equal('black');

    pegColor = browser.getText('~Peg95');
    expect(pegColor).to.equal('black');

    pegColor = browser.getText('~Peg96');
    expect(pegColor).to.equal('black');
  });
});
