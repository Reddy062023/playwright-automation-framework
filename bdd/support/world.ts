import { setWorldConstructor, World } from "@cucumber/cucumber";
import { chromium, Browser, BrowserContext } from "playwright";

class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;

  async init() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
  }
}

setWorldConstructor(CustomWorld);
