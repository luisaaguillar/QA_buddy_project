import { Selector, t} from 'testcafe';

class DashboardPage {
    constructor () {       
        //-------------------------- Dashboard components ------------------------
        this.DB_addTaskButton = Selector('.agenda_add_task');
        this.DB_taskNameField = Selector('.notranslate.public-DraftEditor-content')
        this.DB_submitTaskButton = Selector('.item_editor_submit.ist_button.ist_button_red');
        this.DB_selectDateButton = Selector('.item_editor_assign_due.item_editor_assign_due--has_date');
        this.DB_dayOptionButton = Selector('.scheduler-suggestions-item-label').withExactText('Today');
        this.DB_listedTaskName = Selector('.task_item_content_text');
        this.DB_FollowingTaskField = Selector('.public-DraftEditor-content');
       
    }

    async addTask (taskName) {
        await t
            .click(this.DB_addTaskButton)
            .typeText(this.DB_taskNameField, taskName)
            .click(this.DB_submitTaskButton)
    }
}
export default new DashboardPage();