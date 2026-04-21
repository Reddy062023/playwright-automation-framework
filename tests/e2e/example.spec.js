import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { readFileSync } from 'fs';

const testData = JSON.parse(
  readFileSync(new URL('../../fixtures/testData.json', import.meta.url))
);

test('POM with test data', async ({ page }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();

  const { username, password } = testData.user;

  console.log(`Using user: ${username}`);

  await expect(page).toHaveTitle(/Example Domain/);
});