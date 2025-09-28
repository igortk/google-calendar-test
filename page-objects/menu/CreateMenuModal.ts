import { Page, Locator } from "@playwright/test";
import { CreateEventModal } from "../event/CreateEventModal";
import { CreateTaskModal } from "../task/CreateTaskModal";

const regexCreateButton = /Create|Створити/i;

// POM for the event creation menu and tasks
export class CreateMenuModal {
  readonly page: Page;

  readonly eventTypeButton: Locator;
  readonly taskTypeButton: Locator;
  readonly createButton: Locator;

  constructor(page: Page) {
    this.page = page;

    //find "Create" button
    this.createButton = page
      .locator("button")
      .filter({ hasText: regexCreateButton });
    //menu selection option for creation an event
    this.eventTypeButton = page.getByRole("menuitem", { name: "Event" });
    //menu selection option for creation an task
    this.taskTypeButton = page.getByRole("menuitem", { name: "Task" });
  }

  //open panel for create an event
  async openCreateEvent(): Promise<CreateEventModal> {
    await this.createButton.click();
    await this.eventTypeButton.click();

    //create new class(POM) object that appeared for create an event
    return new CreateEventModal(this.page);
  }

  //open panel for create a task
  async openCreateTask(): Promise<CreateTaskModal> {
    await this.createButton.click();
    await this.taskTypeButton.click();

    //create new class(POM) object that appeared for create a task
    return new CreateTaskModal(this.page);
  }
}
