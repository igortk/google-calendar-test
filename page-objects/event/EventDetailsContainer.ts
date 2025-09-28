import { expect, Page, Locator } from "@playwright/test";

const regexEditButton = /Edit event|Редагувати подію/i;
const regexDeleteButton = /Delete event|Видалити подію/i;

export class EventDetailsContainer {
  readonly page: Page;
  readonly container: Locator;
  readonly editButton: Locator;
  readonly eventTitleInput: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;

  constructor(page: Page, title: string) {
    this.page = page;

    this.container = page.getByRole("button", { name: title });
    this.editButton = page.getByLabel(regexEditButton);
    this.eventTitleInput = page.getByPlaceholder("Add title");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.deleteButton = page.getByRole("button", { name: "Delete event" }); //page.getByLabel(regexDeleteButton);
  }

  async editEventsTitle(newTitle: string) {
    await this.container.click();
    await this.editButton.click();

    await this.eventTitleInput.fill(newTitle);
    await this.saveButton.click();
  }

  async deleteEventsTitle() {
    await this.container.click();

    await this.deleteButton.click();
  }
}
