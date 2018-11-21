/**
 * Created by Olivier Rigaut on 01/26/18.
 */
import Page from './page';

class BoardPage extends Page {
  click = id => browser.click(`~${id}`)
}

export default new BoardPage();
