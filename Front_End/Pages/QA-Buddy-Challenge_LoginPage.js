import { Selector, t } from 'testcafe';

class LoginPage {
    constructor () {
        this.PP_EmailField = Selector('#email');
        this.PP_PasswordField = Selector('#password');
        this.PP_LoginButton = Selector('.submit_btn.ist_button.ist_button_red.sel_login');
        this.PP_InvalidDataAlertMessage = Selector('.error_msg');
       
    }

    async basiclogin (Username, Password) {
        await t
            .typeText(this.PP_EmailField, Username)
            .typeText(this.PP_PasswordField, Password)
            .click(this.PP_LoginButton);
    }
}
export default new LoginPage();