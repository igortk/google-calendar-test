import { expect, Page, Locator } from "@playwright/test";
import { CreateMenuModal } from "./menu/CreateMenuModal";
import { EventDetailsContainer } from "./event/EventDetailsContainer";

export class CalendarPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  initCreateMenuModal(): CreateMenuModal {
    return new CreateMenuModal(this.page);
  }

  initEventDetailsContainer(title: string): EventDetailsContainer {
    return new EventDetailsContainer(this.page, title);
  }

  eventTitleOnCalendar(title: string): Locator {
    return this.page.getByText(title, { exact: true });
  }
}
