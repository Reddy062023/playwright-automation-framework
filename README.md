# Playwright Automation Framework

A unified, production-grade test automation framework built with Playwright, combining Page Object Model, Cucumber BDD, and multi-layer test organisation across UI, E2E, and API testing.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Browser Automation | Playwright |
| Language | JavaScript / TypeScript |
| BDD | Cucumber |
| Design Pattern | Page Object Model (POM) |
| CI/CD | GitHub Actions |
| Test Data | JSON fixtures |
| Config | Environment-based config |

---

## Project Structure

```
playwright-automation-framework/
│
├── .github/workflows/
│   └── playwright.yml          # CI/CD pipeline - runs on every push
│
├── bdd/                        # Cucumber BDD layer
│   ├── features/
│   │   ├── login.feature       # Gherkin feature file
│   │   └── step_definitions/
│   │       └── loginSteps.js   # Step implementations
│   ├── steps/
│   │   └── login.steps.ts      # TypeScript step definitions
│   ├── support/
│   │   ├── hooks.ts            # Before/After hooks
│   │   └── world.ts            # Custom world object
│   └── cucumber.js             # Cucumber configuration
│
├── config/
│   └── env.js                  # Environment configuration
│
├── fixtures/
│   └── testData.json           # Centralised test data
│
├── pages/                      # Page Object Model
│   ├── BasePage.js             # Base page with shared actions
│   └── LoginPage.js            # Login page actions and locators
│
├── tests/
│   ├── e2e/
│   │   └── example.spec.js     # End-to-end test scenarios
│   ├── ui/
│   │   ├── UIBasics.spec.js    # UI interaction tests
│   │   └── UIBasicstest.spec.js # Extended UI test coverage
│   └── api/                    # API test folder (ready for expansion)
│
├── utils/                      # Shared utilities
├── package.json
└── .gitignore
```

---

## Key Features

### Page Object Model
`BasePage.js` provides shared Playwright actions — navigation, clicks, fills, waits — used across all page objects. `LoginPage.js` encapsulates all login-related locators and actions, keeping tests clean and maintainable.

### Cucumber BDD
Feature files written in plain English Gherkin, making test scenarios readable for both technical and non-technical stakeholders. Step definitions connect Gherkin steps to Playwright actions.

### Multi-Layer Test Organisation
Tests are split into clear layers — `e2e` for full user journeys, `ui` for component and interaction testing, and `api` for API validation — making it easy to run targeted test suites.

### JSON Test Data
Test data is externalised into `fixtures/testData.json`, keeping test logic separate from data and enabling easy updates without touching test code.

### GitHub Actions CI/CD
Every push triggers the Playwright test suite automatically via `.github/workflows/playwright.yml`, with full browser support across Chromium, Firefox, and WebKit.

---

## Setup & Run

### Prerequisites
- Node.js 18+
- npm

### Install dependencies
```bash
npm install
npx playwright install
```

### Run all Playwright tests
```bash
npx playwright test
```

### Run E2E tests only
```bash
npx playwright test tests/e2e/
```

### Run UI tests only
```bash
npx playwright test tests/ui/
```

### Run Cucumber BDD tests
```bash
npx cucumber-js bdd/features
```

### Run with HTML report
```bash
npx playwright test --reporter=html
npx playwright show-report
```

---

## CI/CD Pipeline

GitHub Actions automatically runs the full test suite on every push and pull request. Results include test pass/fail status, screenshots on failure, and trace files for debugging.

---

## Author

Built by Japendra
Portfolio: https://Reddy062023.github.io
GitHub: https://github.com/Reddy062023
Contact: japendras06@gmail.com
