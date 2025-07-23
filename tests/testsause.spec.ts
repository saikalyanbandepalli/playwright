import {test} from "@playwright/test";



test("login test",async({page})=>{
await page.goto("https://www.saucedemo.com/v1/");
//await page.pause();

//import { test, expect } from '@playwright/test';

//test('test', async ({ page }) => {
  // await page.locator('[data-test="username"]').click();
  // await page.locator('[data-test="username"]').fill('standard_user');
  // await page.locator('[data-test="password"]').click();
  // await page.locator('[data-test="password"]').fill('secret_sause');
  // await page.getByRole('button', { name: 'LOGIN' }).click();
//import { test, expect } from '@playwright/test';

//test('test', async ({ page }) => {
  await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('div').filter({ hasText: /^\$29\.99ADD TO CART$/ }).getByRole('button').click();
  await page.getByRole('link', { name: '1' }).click();
  await page.getByRole('link', { name: 'CHECKOUT' }).click();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('saikalyan');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('bandepalli');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('523108');
  await page.getByRole('button', { name: 'CONTINUE' }).click();
  await page.getByRole('link', { name: 'FINISH' }).click();
  await page.getByRole('link').filter({ hasText: /^$/ }).click();
  await page.getByRole('button', { name: 'Open Menu' }).click();
  await page.getByRole('link', { name: 'Logout' }).click();
});

  