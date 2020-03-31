import welcomePage from '../Pages/QA-Buddy-Challenge_WelcomePage';
import loginPage from '../Pages/QA-Buddy-Challenge_LoginPage';
import dashboardPage from '../Pages/QA-Buddy-Challenge_DashboardPage';
import {data} from '../Utils/QA-Buddy-Challenge_Data';

fixture `Add task tests suite`
    .page `https://todoist.com/`;

test('Add task', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton);
  await loginPage.basiclogin(data.credentials.valid.username, data.credentials.valid.password);
  await dashboardPage.addTask(data.randomName);
  await t.expect(dashboardPage.db_listedTaskName.withExactText(data.randomName).exists).ok();
});

test('Add n tasks', async t => {
  await t
      .setTestSpeed(.2)
      .click(welcomePage.fp_LoginButton);
  await loginPage.basiclogin(data.credentials.valid.username, data.credentials.valid.password);
  for (let currentTaskIterator = 1; currentTaskIterator <= data.taskCount; currentTaskIterator++) {
    const uniqueName = data.randomName + currentTaskIterator;
    await t
        .typeText(dashboardPage.db_FollowingTaskField, uniqueName)
        .click(dashboardPage.db_submitTaskButton);
    await t.expect(dashboardPage.db_listedTaskName.withExactText(uniqueName).exists).ok();
  }
});
