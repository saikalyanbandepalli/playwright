import { test as basic, Browser } from '@playwright/test';
import { Page } from '@playwright/test';
type MyFixture = {
    login: any;
}
export const test = basic.extend<MyFixture>({
    login: async ({ page,browser}: { page: Page ,browser: Browser}, use: any) => { // Destructuring page from the context
        await page.goto("https://www.saucedemo.com/"); // Correct URL
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce'); // Corrected typo in 'secret_sauce'
        await page.getByRole('button', { name: 'LOGIN' }).click();
        await use(page);
    }
});