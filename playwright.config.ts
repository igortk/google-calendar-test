import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests", // base directory with test
  fullyParallel: true, // run test in parallel or not
  workers: 4, // the number of tests that will be run in parallel
  projects: [
    {
      name: "setup",
      testMatch: /.*\.setup\.ts/, // the path where the necessary files for this project are located
      use: {
        ...devices["Desktop Chrome"],
        baseURL: "https://calendar.google.com/",
        launchOptions: {
          headless: false, // Setting whether the browser window will appear on the computer or not
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
      dependencies: ["setup"],
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
});
