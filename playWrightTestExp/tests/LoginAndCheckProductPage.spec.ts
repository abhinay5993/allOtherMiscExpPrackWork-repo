import { expect, test } from '@playwright/test'

test('Should display PD page for loggedIn User',

    async ({ page }) => {
        await page.goto('https://www.saucedemo.com/v1/');
        await page.locator('[data-test="username"]').fill('standard_user')
        await page.locator('[data-test="password"]').fill('secret_sauce')
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await expect(page.getByText('Products')).toBeVisible();
    }

);