import { expect, Page, Locator } from "@playwright/test";

const regexEditButton = /Edit event|Редагувати подію/i;
const regexDeleteButton = /Delete event|Видалити подію/i;
const regexEventTitleInput = /Add title|Додайте назву/i

//POM for panel where we can edit events settings
export class EventDetailsContainer {
  readonly page: Page;
  readonly eventDetailsButton: Locator;
  readonly editButton: Locator;
  readonly eventTitleInput: Locator;
  readonly saveButton: Locator;
  readonly deleteButton: Locator;
  readonly eventDetailsDialog: Locator;

  constructor(page: Page, title: string) {
    this.page = page;

    //find event on calendar page
    this.eventDetailsButton = page.getByRole("button", { name: title });
    //general panel with info about event
    this.eventDetailsDialog = page.getByRole("dialog", { name: title });
    //button for edit event info
    this.editButton = page.getByLabel(regexEditButton);
    //lable for event title
    this.eventTitleInput = page.getByPlaceholder(regexEventTitleInput);
    //button for save new event info
    this.saveButton = page.getByRole("button", { name: "Save" });
    //button for delete event
    this.deleteButton = page.getByRole("button", { name: regexDeleteButton });
  }

  //edit event
  async editEventsTitle(newTitle: string) {
    await this.eventDetailsButton.click();
    await this.editButton.click();

    await this.eventTitleInput.fill(newTitle);
    await this.saveButton.click();
  }

  //delete new event
  async deleteEvents() {
    await this.eventDetailsButton.click();

    await this.deleteButton.click();
    //waiting whan panel with info about event is disappear 
    await expect(this.eventDetailsDialog).not.toBeVisible({ timeout: 5_000 });
  }
}
