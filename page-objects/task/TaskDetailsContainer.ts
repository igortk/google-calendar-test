import { expect, Page, Locator } from "@playwright/test";

const regexEditButton = /Edit task|Редагувати завдання/i;
const regexDeleteButton = /Delete task|Видалити завдання/i;
const regexTaskTitleInput = /Add title|Додайте назву/i;

//POM for panel where we can edit tasks settings
export class TaskDetailsContainer {
  readonly page: Page;
  readonly taskDetailsButton: Locator;
  readonly editButton: Locator;
  readonly taskTitleInput: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  readonly taskDetailsDialog: Locator;

  constructor(page: Page, title: string) {
    this.page = page;

    //find task on calendar page
    this.taskDetailsButton = page.getByRole("button", { name: title });
    //general panel with info about task
    this.taskDetailsDialog = page.getByRole("dialog", { name: title });
    //button for edit task info
    this.editButton = page.getByLabel(regexEditButton);
    //lable for task title
    this.taskTitleInput = page.getByPlaceholder(regexTaskTitleInput);
    //button for save new task info
    this.saveButton = page.getByRole("button", { name: "Save" });
    //button for delete task
    this.deleteButton = page.getByRole("button", { name: regexDeleteButton });
  }

  //edit task
  async taskTasksTitle(newTitle: string) {
    await this.taskDetailsButton.click();
    await this.editButton.click();

    await this.taskTitleInput.fill(newTitle);
    await this.saveButton.click();
  }
  //delete new task
  async deleteTask() {
    await this.taskDetailsButton.click();

    await this.deleteButton.click();
    //waiting whan panel with info about task is disappear
    await expect(this.taskDetailsDialog).not.toBeVisible({ timeout: 5_000 });
  }
}
