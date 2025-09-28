
import { test as base } from '@playwright/test';
import { CalendarPage } from '../page-objects/CalendarPage';
import { CreateMenuModal } from '../page-objects/menu/CreateMenuModal';

// Create new Fixtures for more comfortable run tests
type GoogleCalendarFixtures = {
  calendarPage: CalendarPage;
  createMenuModal: CreateMenuModal;
};

export const test = base.extend<GoogleCalendarFixtures>({
  // Before each new test, go to the main page for the test
  calendarPage: async ({ page }, use) => {
    const calendarPage = new CalendarPage(page);
    await page.goto('/');
    await use(calendarPage);
  },

  // Before each new test, define a menu for creating events and tasks
  createMenuModal: async ({ page }, use) => {
    const createMenuModal = new CreateMenuModal(page); 
    await use(createMenuModal);
  },
});