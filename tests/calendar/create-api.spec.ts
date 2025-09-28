import { expect } from "@playwright/test";
import { test } from "../baseTest";

test.describe("Calendar CRUD functionality, Create: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
    let createEventModal = await createMenuModal.openCreateEvent();

    let eventTitle = `Test-event-${Date.now()}`;
    createEventModal.createEvent(eventTitle);

    await expect(calendarPage.eventTitleOnCalendar(eventTitle)).toBeVisible();
  });

  test("Task", async ({ calendarPage, createMenuModal }) => {
    let createEventModal = await createMenuModal.openCreateTask();

    let taskTitle = `Test-event-${Date.now()}`;
    createEventModal.createTask(taskTitle);

    await expect(calendarPage.eventTitleOnCalendar(taskTitle)).toBeVisible();
  });
});
