
import { test as base } from '@playwright/test';
import { CalendarPage } from '../page-objects/CalendarPage';
import { CreateMenuModal } from '../page-objects/menu/CreateMenuModal';

type GoogleCalendarFixtures = {
  calendarPage: CalendarPage;
  createMenuModal: CreateMenuModal;
};

export const test = base.extend<GoogleCalendarFixtures>({
  calendarPage: async ({ page }, use) => {
    const calendarPage = new CalendarPage(page);
    await page.goto('/');
    await use(calendarPage); 
  },

  createMenuModal: async ({ page }, use) => {
    const createMenuModal = new CreateMenuModal(page); 
    await use(createMenuModal);
  },
});