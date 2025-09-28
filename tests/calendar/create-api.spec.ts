import { expect } from "@playwright/test";
import { test } from "../baseTest";

// List of tests for API creation
test.describe("Calendar CRUD functionality, Create: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
    // open new panel for create new event
    let createEventModal = await createMenuModal.openCreateEvent();
  
    // generate unique event name for test
    let eventTitle = `Test-event-${Date.now()}`;
    // create new event by eventTitle
    createEventModal.createEvent(eventTitle);

    // check new event in calendar
    await expect(calendarPage.titleOnCalendar(eventTitle)).toBeVisible();
  });

  test("Task", async ({ calendarPage, createMenuModal }) => {
    // open new panel for create new task    
    let createEventModal = await createMenuModal.openCreateTask();

    // generate unique task name for test
    let taskTitle = `Test-event-${Date.now()}`;
    // create new event by taskTitle
    createEventModal.createTask(taskTitle);

    // check new task in calendar
    await expect(calendarPage.titleOnCalendar(taskTitle)).toBeVisible();
  });
});
