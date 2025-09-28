import { test, expect } from "@playwright/test";
import { CalendarPage } from "../../page-objects/CalendarPage";
import { CreateMenuModal } from "../../page-objects/menu/CreateMenuModal";

test.describe("Calendar CRUD functionality, Delete: ", () => {
  let calendarPage: CalendarPage;
  let createMenuModal: CreateMenuModal;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    calendarPage = new CalendarPage(page);
    createMenuModal = calendarPage.initCreateMenuModal();
  });

  test("Event", async ({ page }) => {
    let createEventModal = await createMenuModal.openCreateEvent();

    let eventTitle = `Test-event-for-delete-${Date.now()}`;
    createEventModal.createEvent(eventTitle);

    await expect(calendarPage.eventTitleOnCalendar(eventTitle)).toBeVisible();

    let eventDetailsContainer = await calendarPage.initEventDetailsContainer(
      eventTitle
    );

    await eventDetailsContainer.deleteEventsTitle();

    await expect(
      calendarPage.eventTitleOnCalendar(eventTitle)
    ).not.toBeVisible({ timeout: 30_000 });
  });
});
