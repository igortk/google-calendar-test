import { test, expect } from "@playwright/test";
import { CalendarPage } from "../../page-objects/CalendarPage";
import { CreateMenuModal } from "../../page-objects/menu/CreateMenuModal";

test.describe("Calendar CRUD functionality, Create: ", () => {
  let calendarPage: CalendarPage;
  let createMenuModal: CreateMenuModal;

  test.beforeEach(async ({ page }) => {
    await page.goto("/");
    calendarPage = new CalendarPage(page);
    createMenuModal = calendarPage.initCreateMenuModal();
  });

  test("Event", async ({ page }) => {
    let createEventModal = await createMenuModal.openCreateEvent();

    let eventTitle = `Test-event-${Date.now()}`;
    createEventModal.createEvent(eventTitle);

    await expect(calendarPage.eventTitleOnCalendar(eventTitle)).toBeVisible();
  });

  test("Task", async ({ page }) => {
    let createEventModal = await createMenuModal.openCreateTask();

    let taskTitle = `Test-event-${Date.now()}`;
    createEventModal.createTask(taskTitle);

    await expect(calendarPage.eventTitleOnCalendar(taskTitle)).toBeVisible();
  });
});
