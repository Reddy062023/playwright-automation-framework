import { Given, When, Then, After } from '@cucumber/cucumber';
import { chromium } from 'playwright';

let browser;
let page;

Given('I open the login page', { timeout: 30000 }, async function () {
  browser = await chromium.launch({ headless: false, slowMo: 50 });
  page = await browser.newPage();
  await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  await page.waitForLoadState('domcontentloaded');
});

When('I enter username and password', { timeout: 60000 }, async function () {
  const usernameInput = page.locator('input[placeholder="email@example.com"]');
  const passwordInput = page.locator('input[placeholder="enter your passsword"]');

  await usernameInput.waitFor({ state: 'visible', timeout: 30000 });
  await usernameInput.fill(process.env.USER_EMAIL || 'jpreddyqa@gmail.com');

  await passwordInput.waitFor({ state: 'visible', timeout: 30000 });
  await passwordInput.fill(process.env.USER_PASSWORD || 'Medway@2025');

  const loginForm = page.locator('form');
  await loginForm.waitFor({ state: 'visible', timeout: 30000 });

  // Click the submit button (input[type="submit"])
  const submitButton = loginForm.locator('input[type="submit"]');
  await submitButton.waitFor({ state: 'visible', timeout: 30000 });
  await submitButton.click();

  // Wait for network and page updates
  await page.waitForLoadState('networkidle');
});
Then('I should be logged in', { timeout: 60000 }, async function () {
  // More specific locator for the HOME button in dashboard
  const homeMenu = page.getByRole('button', { name: 'HOME' });
  await homeMenu.waitFor({ state: 'visible', timeout: 6000 });

  // Optional: check localStorage token to confirm login
  const token = await page.evaluate(() => localStorage.getItem('token'));
  if (!token) throw new Error('Login failed: no auth token found');

  console.log('Login successful: dashboard HOME button visible and token found');
});

