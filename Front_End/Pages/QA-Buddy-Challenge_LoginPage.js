import {Selector, t} from 'testcafe';

class LoginPage {
  constructor() {
    this.pp_EmailField = Selector('#email');
    this.pp_PasswordField = Selector('#password');
    this.pp_LoginButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login');
    this.pp_InvalidDataAlertMessage = Selector('.error_msg');
  }

  async basiclogin(Username, Password) {
    await t
        .typeText(this.pp_EmailField, Username)
        .typeText(this.pp_PasswordField, Password)
        .click(this.pp_LoginButton);
  }
}
export default new LoginPage();
