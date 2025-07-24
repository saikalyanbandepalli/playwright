//import {test} from "@playwright/test";

// 

// test("login test",async({page})=>{
// await page.goto("https://www.saucedemo.com/v1/");
// //await page.pause();

// //import { test, expect } from '@playwright/test';

// //test('test', async ({ page }) => {
//   // await page.locator('[data-test="username"]').click();
//   // await page.locator('[data-test="username"]').fill('standard_user');
//   // await page.locator('[data-test="password"]').click();
//   // await page.locator('[data-test="password"]').fill('secret_sause');
//   // await page.getByRole('button', { name: 'LOGIN' }).click();
// //import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto("https://www.saucedemo.com/v1/");
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

  


// test("login hematite test",async({page})=>{
//  //await page.pause();
// await page.goto("http://quiz.hematitecorp.com/#/");
//  //await page.pause();
//  //import { test, expect } from '@playwright/test';

// //test('test', async ({ page }) => {
//   await page.getByRole('textbox', { name: 'Email Address' }).click();
//   await page.getByRole('textbox', { name: 'Email Address' }).fill('sai.kalyan@changepond.com');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('Kalyan@123');
//   await page.getByRole('button', { name: 'Sign In' }).click();
//   await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
//   await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
//   await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
//   await page.getByText('Enter Voucher code *Enter Voucher code *submit').click();
//   await page.getByRole('button', { name: 'submit' }).click();
//   await page.getByRole('button', { name: 'Select Exam' }).click();
//   await page.getByRole('option', { name: 'None' }).click();
//   await page.getByText('Select ExamSelect Examselect').click();
//   await page.locator('#menu-exam div').first().click();
//   await page.getByRole('button', { name: 'Logout' }).click();
//   await page.getByRole('button', { name: 'Logout' }).click();
// });
// //});


import { test, expect } from '@playwright/test';
import { describe } from 'node:test';

describe('Login and Exam Selection Tests', () => {

  describe('User  Login', () => {
    test('login hematite test', async ({ page }) => {
      await page.goto("http://quiz.hematitecorp.com/#/");
      await page.getByRole('textbox', { name: 'Email Address' }).click();
      await page.getByRole('textbox', { name: 'Email Address' }).fill('sai.kalyan@changepond.com');
      await page.getByRole('textbox', { name: 'Password' }).click();
      await page.getByRole('textbox', { name: 'Password' }).fill('Kalyan@123');
      await page.getByRole('button', { name: 'Sign In' }).click();
    });
  });


  describe('Voucher Code Entry', () => {
    test('enter voucher code', async ({ page }) => {
      // Ensure the user is logged in before entering the voucher code
      await page.waitForSelector('text=Welcome'); // Adjust selector based on actual UI
      await page.getByRole('textbox', { name: 'Enter Voucher code' }).click();
      await page.getByRole('textbox', { name: 'Enter Voucher code' }).press('CapsLock');
      await page.getByRole('textbox', { name: 'Enter Voucher code' }).fill('FNPQO6');
      await page.getByText('Enter Voucher code *Enter Voucher code *submit').click();
      await page.getByRole('button', { name: 'submit' }).click();
    });
  });


  describe('Exam Selection', () => {
    test('select exam and logout', async ({ page }) => {
      // Ensure the user has entered the voucher code before selecting an exam
      await page.waitForSelector('text=Voucher Applied'); // Adjust selector based on actual UI
      await page.getByRole('button', { name: 'Select Exam' }).click();
      await page.getByRole('option', { name: 'None' }).click();
      await page.getByText('Select ExamSelect Examselect').click();
      await page.locator('#menu-exam div').first().click();
      await page.getByRole('button', { name: 'Logout' }).click();
      await page.getByRole('button', { name: 'Logout' }).click();
    });
  });

});
