import { test, expect } from '@playwright/test';
import { faker } from "@faker-js/faker";

test('has title', async ({ page }) => {
    //await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
    await page.goto(process.env.APP_URL);
    await expect(page.getByRole('heading', { name: 'Tallinn Delivery' })).toBeVisible();
    await expect(page.getByText('Training appTallinn')).toBeVisible();
});

test('has authorization error', async ({ page }) => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password();
    //await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
    await page.goto(process.env.APP_URL);

  await page.getByTestId('username-input').fill(randomUsername);
  await page.getByTestId('password-input').fill(randomPassword);
  await page.getByTestId('signIn-button').click();
  await expect(page.getByTestId('authorizationError-popup-close-button')).toBeVisible();
});

test('sign in disabled when valid username and invalid password', async ({ page }) => {
    const randomUsername = faker.internet.username();
    const randomPassword = faker.internet.password().slice(0, 5);

    //await page.goto('https://fe-delivery.tallinn-learning.ee/signin');
    await page.goto(process.env.APP_URL);

    await page.getByTestId('username-input').fill(randomUsername);
    await page.getByTestId('password-input').fill(randomPassword);
    await expect(page.getByTestId('signIn-button')).toBeDisabled();
});
