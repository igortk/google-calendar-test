import {test, expect} from '@playwright/test'

const authFile = 'google-auth.json'

test('authenticate', async ({page})=>{
    await page.goto('/');

    await expect(page.getByLabel(/Create|Створити/i)).toBeVisible({timeout: 60_000});

    await page.context().storageState({path: authFile});
})