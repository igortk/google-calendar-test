import { expect } from "@playwright/test";
import { test } from "../baseTest";

test.describe("Calendar CRUD functionality, Edit: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
    let createEventModal = await createMenuModal.openCreateEvent();

    let eventTitle = `Test-event-${Date.now()}`;
    createEventModal.createEvent(eventTitle);

    await expect(calendarPage.eventTitleOnCalendar(eventTitle)).toBeVisible();

    let eventDetailsContainer = await calendarPage.initEventDetailsContainer(
      eventTitle
    );

    let newEventTitle = `New-Test-event-${Date.now()}`;
    eventDetailsContainer.editEventsTitle(newEventTitle);

    await expect(
      calendarPage.eventTitleOnCalendar(newEventTitle)
    ).toBeVisible();

    await expect(
      calendarPage.eventTitleOnCalendar(eventTitle)
    ).not.toBeVisible();
  });
});
