import {test,expect} from '@playwright/test';
import { parse } from 'path';

test("custom assertion", async({page})=>{
await page.goto("http://127.0.0.1:5500/tests/assert.html");
await page.pause();

const textValue:any = await page.locator("#d1").textContent();
const value = parseInt(textValue || '0');

await expect(value>10).toBeTruthy();
})