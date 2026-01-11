/*import {test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
    const path = require('path');
    const filePath =
        `file://${path.resolve('html/dummy-order.html' )}`;
    await page.goto(filePath);
})
test('button disabled initially' , async ({ page }) => {
    await expect(page.getByTestId('submit-order')).toBeDisabled();
});

test('button enabled when username and password filled in' , async ({ page }) => {
    await page.getByTestId('username').fill('Anna');
    await page.getByTestId('email').fill('anna1@test.ee');
    await expect(page.getByTestId('submit-order')).toBeEnabled();
})

test('OK message when username and password filled in' , async ({ page }) => {
    await page.getByTestId('username').fill('Anna');
    await page.getByTestId('email').fill('anna1@test.ee');
    await page.getByTestId('submit-order').click();

    await expect(page.locator('[Id="popup-message"]')).toBeVisible();
    await expect(page.getByText('OK')).toBeVisible();
})*/
