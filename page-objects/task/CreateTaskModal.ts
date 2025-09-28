import { expect, Page, Locator } from "@playwright/test";

export class CreateTaskModal {
  readonly page: Page;
  readonly taskTitleInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.taskTitleInput = page.getByPlaceholder("Add title");
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async createTask(title: string) {
    await expect(this.taskTitleInput).toBeVisible();
    await this.taskTitleInput.fill(title);

    await this.saveButton.click();
  }
}
