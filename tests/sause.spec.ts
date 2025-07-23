import { test, expect, chromium, Locator, Page, Browser } from '@playwright/test';

test("Login Test", async ({ page }) => {
    await page.goto("https://www.saucedemo.com/v1/");
    await page.pause();
});

import { LoginPage } from './LoginPage';
test("login_test_case",async({page})=>{
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
   
   
})