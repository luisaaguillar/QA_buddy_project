import welcomePage from '../Pages/QA-Buddy-Challenge_WelcomePage';
import loginPage from '../Pages/QA-Buddy-Challenge_LoginPage';
import dashboardPage from '../Pages/QA-Buddy-Challenge_DashboardPage';
import { validCredentials, taskNames, numberOfTasks} from '../Utils/QA-Buddy-Challenge_Data';
fixture `Add task tests suite`
    .page `https://todoist.com/`;

test('Add task', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton);
	await loginPage.basiclogin(validCredentials.username, validCredentials.password);
	await dashboardPage.addTask(taskNames.name1);
	await t.expect(dashboardPage.DB_listedTaskName.withExactText(taskNames.name1).exists).ok();
});

test('Add n tasks', async t => {
	await t
		.setTestSpeed(.2)
		.click(welcomePage.FP_LoginButton);
    await loginPage.basiclogin(validCredentials.username, validCredentials.password);
    var firstName = taskNames.name1 + 1
    await dashboardPage.addTask(firstName);
    await t.expect(dashboardPage.DB_listedTaskName.withExactText(firstName).exists).ok();
    for (var CurrentTaskIterator = 2; CurrentTaskIterator <= numberOfTasks; CurrentTaskIterator++) {
        var UniqueName = taskNames.name1 + CurrentTaskIterator
        await t
            .typeText(dashboardPage.DB_FollowingTaskField, UniqueName)
            .click(dashboardPage.DB_submitTaskButton);
        await t.expect(dashboardPage.DB_listedTaskName.withExactText(UniqueName).exists).ok();
    }
});