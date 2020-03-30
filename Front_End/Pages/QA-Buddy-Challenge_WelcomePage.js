import { Selector} from 'testcafe';

class WelcomePage {
    constructor () {
        this.FP_HomeButton = Selector('._4H9G8');
        this.FP_FeaturesButton = Selector('a').withAttribute('href', '/features');
        this.FP_PremiumButton = Selector('a').withAttribute('href', '/premium');
        this.FP_BusinessButton = Selector('a').withAttribute('href', '/business');
        this.FP_LoginButton = Selector('a').withAttribute('href', '/users/showLogin');
        this.FP_SignupButton = Selector('a').withAttribute('href', '/users/showRegister');
        this.FP_GetStartedButton = Selector('a').withAttribute('href', '/users/showRegister');
    }
}
export default new WelcomePage();