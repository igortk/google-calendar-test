# Google Calendar E2E Tests (Playwright) 📅

This repository contains End-to-End (E2E) tests for Google Calendar's CRUD (Create, Read, Update, Delete) functionality, implemented using **Playwright** and **TypeScript**.

The tests follow the **Page Object Model (POM)** pattern for maintainability and use Playwright's native features for handling authentication.

***

## 🚀 Getting Started

Follow these steps to set up and run the tests locally.

### Prerequisites

You need **Node.js** (version 18 or higher) installed on your system.

### 1. Clone the Repository

```bash
git clone https://github.com/igortk/google-calendar-test.git
cd .\google-calendar-test\
```

### 2. Install Dependencies
Install the project dependencies, including Playwright:
```bash
npm install
```

### 3. Install Browser Binaries
Playwright requires specific browser binaries (Chromium, Firefox, WebKit) to run the tests.
```bash
npx playwright install
```

## 🔐 Authentication Setup
The project is configured to automatically manage authentication using Playwright's storageState feature:

1. A dedicated setup project is defined in playwright.config.ts.
2. If the authentication file (google-auth.json) does not exist, the setup project will run first, opening a browser for you to log in.
3. Your session will be saved to the file (google-auth.json), and all subsequent tests will reuse this state, skipping the manual login.

‼️If you don't want to manually provide your credentials for every run, feel free to comment out these configuration sections.
Just remove the entire "setup" project configuration and comment out/delete the dependency on it in your other projects (dependencies: ['setup']).
```
projects: [
    {
      name: "setup",
      ...
    },
    {
      name: "end-to-end",
      ...
      dependencies: ['setup'],
    }
]
```
