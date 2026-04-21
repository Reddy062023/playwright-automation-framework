import { Before, After } from "@cucumber/cucumber";

Before(async function () {
  await this.init(); // initializes the browser and context from world.ts
});

After(async function () {
  await this.browser.close(); // closes the browser after each scenario
});
