/**
 * Created by Olivier Rigaut on 01/26/18.
 */

class Page {
  constructor() {
    this.title = 'Mastermind';
  }

  open(path) {
    browser.url(path);
  }
}

export default Page;
