import { expect, Page, Locator } from "@playwright/test";

const regexEventTitleInput = /Add title|Додайте назву/i

//POM for panel where we can create new event with some settings
export class CreateEventModal {
  readonly page: Page;
  readonly eventTitleInput: Locator;
  readonly saveButton: Locator;

  constructor(page: Page) {
    this.page = page;

    //Label for events title
    this.eventTitleInput = page.getByPlaceholder(regexEventTitleInput);
    //Button to save settings and create new event
    this.saveButton = page.getByRole("button", { name: "Save" });
  }

  //create a new event and assign it a title
  async createEvent(title: string) {
    await expect(this.eventTitleInput).toBeVisible();
    await this.eventTitleInput.fill(title);

    await this.saveButton.click();
  }
}
