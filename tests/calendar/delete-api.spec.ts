import { expect } from "@playwright/test";
import { test } from "../baseTest";

test.describe("Calendar CRUD functionality, Delete: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
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
    ).not.toBeVisible({ timeout: 10_000 });
  });
});
