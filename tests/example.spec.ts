import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Tallinn/);
});

test('has authorization error', async ({ page }) => {
  await page.goto('https://fe-delivery.tallinn-learning.ee/signin');

  await page.getByTestId('username-input').fill('maria');
  await page.getByTestId('password-input').fill('password123');
  await page.getByTestId('signIn-button').click();
  await expect(page.getByTestId('authorizationError-popup-close-button')).toBeVisible();
});

test('sign in disabled when valid username and invalid password', async ({ page }) => {
    await page.goto('https://fe-delivery.tallinn-learning.ee/signin');

    await page.getByTestId('username-input').fill('maria');
    await page.getByTestId('password-input').fill('psw12');
    await expect(page.getByTestId('signIn-button')).toBeDisabled();
});
