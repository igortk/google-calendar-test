import { defineConfig, devices } from "@playwright/test";

/**
 * Read environment variables from file--.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://calendar.google.com/",
        storageState: "google-auth.json",
        launchOptions: {
          headless: false,
          args: ["--disable-blink-features=AutomationControlled"],
        },
      },
    },
    {
      name: "end-to-end",
      testMatch: /.*\.spec\.ts/,
      use: {
        ...devices["Desktop Chrome"],
        storageState: "google-auth.json",
        baseURL: "https://calendar.google.com/",
        launchOptions: {
          headless: false,
          args: ["--disable-blink-features=AutomationControlled"],
        },
      },
      dependencies: ['setup'],
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});
