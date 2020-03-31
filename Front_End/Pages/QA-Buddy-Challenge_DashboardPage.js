import {Selector, t} from 'testcafe';

class DashboardPage {
  constructor() {
    // -------------------------- Dashboard components ------------------------
    this.db_addTaskButton = Selector('.agenda_add_task');
    this.db_taskNameField = Selector('.notranslate.public-DraftEditor-content');
    this.db_submitTaskButton = Selector('.item_editor_submit.ist_button.ist_button_red');
    this.db_selectDateButton = Selector('.item_editor_assign_due.item_editor_assign_due--has_date');
    this.db_dayOptionButton = Selector('.scheduler-suggestions-item-label').withExactText('Today');
    this.db_listedTaskName = Selector('.task_item_content_text');
    this.db_FollowingTaskField = Selector('.public-DraftEditor-content');
  }

  async addTask(taskName) {
    await t
        .click(this.db_addTaskButton)
        .typeText(this.db_taskNameField, taskName)
        .click(this.db_submitTaskButton);
  }
}

export default new DashboardPage();
