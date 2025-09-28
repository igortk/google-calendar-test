import { Page, Locator } from "@playwright/test";
import { CreateMenuModal } from "./menu/CreateMenuModal";
import { EventDetailsContainer } from "./event/EventDetailsContainer";
import { TaskDetailsContainer } from "./task/TaskDetailsContainer";

// POM for general calendar page
export class CalendarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  //create new menu modal where we can create event and task
  initCreateMenuModal(): CreateMenuModal {
    return new CreateMenuModal(this.page);
  }

  //create new details container where we can create new event and set up how we want/can
  initEventDetailsContainer(title: string): EventDetailsContainer {
    return new EventDetailsContainer(this.page, title);
  }

  //create new details container where we can create new task and set up how we want/can
  initTaskDetailsContainer(title: string): TaskDetailsContainer {
    return new TaskDetailsContainer(this.page, title);
  }

  //find element on a calendar. in our situation is created event and task
  titleOnCalendar(title: string): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
