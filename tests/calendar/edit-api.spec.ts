import { expect } from "@playwright/test";
import { test } from "../baseTest";

// List of tests for API edit
test.describe("Calendar CRUD functionality, Edit: ", () => {
  test("Event", async ({ calendarPage, createMenuModal }) => {
    // Prepare event for test
    // Open new panel for create new event
    let createEventModal = await createMenuModal.openCreateEvent();

    // generate unique event name for test
    let eventTitle = `Test-event-${Date.now()}`;
    // create new event by eventTitle
    createEventModal.createEvent(eventTitle);

    // check new event in calendar
    await expect(calendarPage.titleOnCalendar(eventTitle)).toBeVisible();

    // define panel with event info and for menage it
    let eventDetailsContainer = await calendarPage.initEventDetailsContainer(
      eventTitle
    );

    // generate new event title for test
    let newEventTitle = `New-Test-event-${Date.now()}`;
    // edit events title
    eventDetailsContainer.editEventsTitle(newEventTitle);
    // check new event title in calendar
    await expect(calendarPage.titleOnCalendar(newEventTitle)).toBeVisible();
    // check old event title in calendar is disappeared
    await expect(calendarPage.titleOnCalendar(eventTitle)).not.toBeVisible();
  });

  test("Task", async ({ calendarPage, createMenuModal }) => {
    // Prepare task for test
    // Open new panel for create new task
    let createTaskModal = await createMenuModal.openCreateTask();

    // generate unique task name for test
    let taskTitle = `Test-task-${Date.now()}`;
    // create new task by taskTitle
    createTaskModal.createTask(taskTitle);

    // check new task in calendar
    await expect(calendarPage.titleOnCalendar(taskTitle)).toBeVisible();

    // define panel with task info and for menage it
    let taskDetailsContainer = await calendarPage.initTaskDetailsContainer(
      taskTitle
    );

    // generate new task title for test
    let newTaskTitle = `New-Test-task-${Date.now()}`;
    // edit tasks title
    taskDetailsContainer.taskTasksTitle(newTaskTitle);

    // check new task title in calendar
    await expect(calendarPage.titleOnCalendar(newTaskTitle)).toBeVisible();
    // check old task title in calendar is disappeared
    await expect(calendarPage.titleOnCalendar(taskTitle)).not.toBeVisible();
  });
});
