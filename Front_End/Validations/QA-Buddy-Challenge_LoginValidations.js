import welcomePage from '../Pages/QA-Buddy-Challenge_WelcomePage';
import loginPage from '../Pages/QA-Buddy-Challenge_LoginPage';
import dashboardPage from '../Pages/QA-Buddy-Challenge_DashboardPage';
import {data} from '../Utils/QA-Buddy-Challenge_Data';

fixture `Login tests suite`
    .page `https://todoist.com/`;


test('Enter valid data do a successful login', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton);
  await loginPage.basiclogin(data.credentials.valid.username, data.credentials.valid.password);
  await t.expect(dashboardPage.db_addTaskButton.exists).ok();
});

test('Login button pressed, no mail, no password', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton)
      .click(loginPage.pp_LoginButton)
      .expect(loginPage.pp_InvalidDataAlertMessage.innerText).eql(data.errors.email);
});

test('Login button pressed, valid mail, no password', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton)
      .typeText(loginPage.pp_EmailField, data.credentials.valid.username)
      .click(loginPage.pp_LoginButton)
      .expect(loginPage.pp_InvalidDataAlertMessage.innerText).eql(data.errors.password);
});

test('Login button pressed, valid mail, Invalid password', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton);
  await loginPage.basiclogin(data.credentials.valid.username, data.credentials.invalid.password);
  await t.expect(loginPage.pp_InvalidDataAlertMessage.innerText).eql(data.errors.emailAndPassword);
});

test('Login button pressed, invalid mail', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton);
  await loginPage.basiclogin(data.credentials.invalid.username, data.credentials.invalid.password);
  await t.expect(loginPage.pp_InvalidDataAlertMessage.innerText).eql(data.errors.emailAndPassword);
});

test('Welcome Page Buttons test', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_HomeButton)
      .click(welcomePage.fp_FeaturesButton)
      .click(welcomePage.fp_PremiumButton)
      .click(welcomePage.fp_BusinessButton);
});
