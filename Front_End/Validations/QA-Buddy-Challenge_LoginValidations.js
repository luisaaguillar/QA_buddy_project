import welcomePage from '../Pages/QA-Buddy-Challenge_WelcomePage';
import loginPage from '../Pages/QA-Buddy-Challenge_LoginPage';
import { getCurrentUrl, validCredentials, invalidCredentials, ErrorMessages } from '../Utils/QA-Buddy-Challenge_Data';

fixture `My fixture`
    .page `https://todoist.com/`;


test('Enter valid data do a successful login', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton);
	await loginPage.basiclogin(validCredentials.username, validCredentials.password);
	await t.expect(getCurrentUrl()).contains('/app');
	//stop using URL to check, use dashboard component instead
});

test('Login button pressed, no mail, no password', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton)
		.click(loginPage.PP_LoginButton)
		.expect(loginPage.PP_InvalidDataAlertMessage.innerText).eql(ErrorMessages.noMail);
});

test('Login button pressed, valid mail, no password', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton)
		.typeText(loginPage.PP_EmailField, invalidCredentials.username)
		.click(loginPage.PP_LoginButton)
		.expect(loginPage.PP_InvalidDataAlertMessage.innerText).eql(ErrorMessages.noPwd);
});

test('Login button pressed, valid mail, Invalid password', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton);
	await loginPage.basiclogin(validCredentials.username, invalidCredentials.password);
	await t.expect(loginPage.PP_InvalidDataAlertMessage.innerText).eql(ErrorMessages.wrongData);
});

test('Login button pressed, invalid mail', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton);
	await loginPage.basiclogin(invalidCredentials.username, invalidCredentials.password);
	await t.expect(loginPage.PP_InvalidDataAlertMessage.innerText).eql(ErrorMessages.wrongData);
});

test('Welcome Page Buttons test', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_HomeButton)
		.click(welcomePage.FP_FeaturesButton)
		.click(welcomePage.FP_PremiumButton)
		.click(welcomePage.FP_BusinessButton);
});