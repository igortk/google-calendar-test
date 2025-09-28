import { expect } from "@playwright/test";
import { test } from "../baseTest";

// List of tests for API delete
test.describe("Calendar CRUD functionality, Delete: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
    // Prepare event for test
    // Open new panel for create new event
    let createEventModal = await createMenuModal.openCreateEvent();

    // generate unique event name for test
    let eventTitle = `Test-event-for-delete-${Date.now()}`;
    // create new event by eventTitle
    createEventModal.createEvent(eventTitle);

    // check new event in calendar
    await expect(calendarPage.titleOnCalendar(eventTitle)).toBeVisible();

    // define panel with event info and for menage it
    let eventDetailsContainer = await calendarPage.initEventDetailsContainer(
      eventTitle
    );

    // delete prepared event
    await eventDetailsContainer.deleteEvents();

    // check prepared task is deleted (wait 10 seconds for the deletions to be applied to the calendar)
    await expect(calendarPage.titleOnCalendar(eventTitle)).not.toBeVisible({
      timeout: 10_000,
    });
  });

  test("Task", async ({ calendarPage, createMenuModal }) => {
    // Prepare task for test
    // Open new panel for create new task
    let createTaskModal = await createMenuModal.openCreateTask();

    // generate unique task name for test
    let taskTitle = `Test-task-for-delete-${Date.now()}`;
    // create new task by taskTitle
    createTaskModal.createTask(taskTitle);

    // check new task in calendar
    await expect(calendarPage.titleOnCalendar(taskTitle)).toBeVisible();

    // define panel with task info and for menage it
    let taskDetailsContainer = await calendarPage.initTaskDetailsContainer(
      taskTitle
    );

    // delete prepared task
    await taskDetailsContainer.deleteTask();

    // check prepared task is deleted (wait 10 seconds for the deletions to be applied to the calendar)
    await expect(calendarPage.titleOnCalendar(taskTitle)).not.toBeVisible({
      timeout: 10_000,
    });
  });
});
