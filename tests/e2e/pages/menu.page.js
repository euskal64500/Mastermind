/**
 * Created by Olivier Rigaut on 01/26/18.
 */
import Page from './page';

class MenuPage extends Page {
  get username()  { return browser.element('#username'); }
  get password()  { return browser.element('#password'); }
  get form()      { return browser.element('#login'); }
  get flash()     { return browser.element('#flash'); }

  open() {
    super.open('login');
  }

  submit() {
    this.form.submitForm();
  }
}

export default new MenuPage();
