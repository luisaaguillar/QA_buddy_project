import {Selector} from 'testcafe';

class WelcomePage {
  constructor() {
    this.fp_HomeButton = Selector('._4H9G8');
    this.fp_FeaturesButton = Selector('a').withAttribute('href', '/features');
    this.fp_PremiumButton = Selector('a').withAttribute('href', '/premium');
    this.fp_BusinessButton = Selector('a').withAttribute('href', '/business');
    this.fp_LoginButton = Selector('a').withAttribute('href', '/users/showLogin');
    this.fp_SignupButton = Selector('a').withAttribute('href', '/users/showRegister');
    this.fp_GetStartedButton = Selector('a').withAttribute('href', '/users/showRegister');
  }
}

export default new WelcomePage();
