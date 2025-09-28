import { expect, Page, Locator } from "@playwright/test";

export class CreateEventModal {
  readonly page: Page;
  readonly eventTitleInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.eventTitleInput = page.getByPlaceholder("Add title");
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  async createEvent(title: string) {
    await expect(this.eventTitleInput).toBeVisible();
    await this.eventTitleInput.fill(title);

    await this.saveButton.click();
  }
}
