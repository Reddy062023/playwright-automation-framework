import { Given, When, Then } from '@cucumber/cucumber';

Given('I open the login page', async function () {
  console.log('Opening login page');
});

When('I enter username and password', async function () {
  console.log('Entering username and password');
});

Then('I should be logged in', async function () {
  console.log('Checking login');
});
