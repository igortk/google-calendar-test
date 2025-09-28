import { expect, Page, Locator } from "@playwright/test";
import { CreateEventModal } from "../event/CreateEventModal";
import { CreateTaskModal } from "../task/CreateTaskModal";

const regexCreateButton = /Create|Створити/i;

export class CreateMenuModal {
  readonly page: Page;

  readonly eventTypeButton: Locator;
  readonly taskTypeButton: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.createButton = page
      .locator("button")
      .filter({ hasText: regexCreateButton });
    this.eventTypeButton = page.getByRole("menuitem", { name: "Event" });
    this.taskTypeButton = page.getByRole("menuitem", { name: "Task" });
  }

  async openCreateEvent(): Promise<CreateEventModal> {
    await this.createButton.click();
    await this.eventTypeButton.click();

    return new CreateEventModal(this.page);
  }

  async openCreateTask(): Promise<CreateTaskModal> {
    await this.createButton.click();
    await this.taskTypeButton.click();

    return new CreateTaskModal(this.page);
  }
}
