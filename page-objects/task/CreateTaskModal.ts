import { expect, Page, Locator } from "@playwright/test";

const regexTaskTitleInput = /Add title|Додайте назву/i

//POM for panel where we can create new event with some settings
export class CreateTaskModal {
  readonly page: Page;
  readonly taskTitleInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    //Label for tasks title
    this.taskTitleInput = page.getByPlaceholder(regexTaskTitleInput);
    //Button to save settings and create new task
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  //create a new task and assign it a title
  async createTask(title: string) {
    await expect(this.taskTitleInput).toBeVisible();
    await this.taskTitleInput.fill(title);

    await this.saveButton.click();
  }
}
