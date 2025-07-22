import {test,expect} from '@playwright/test';
import { parse } from 'path';

test("custom assertion", async({page})=>{
await page.goto("http://127.0.0.1:5500/tests/assert.html");
//await page.pause();

// const textValue:any = await page.locator("#d1").textContent();
// const value = parseInt(textValue || '0');

const h2value:any = await page.locator("#d2").textContent();
//const valuecheck = parseInt(h2value || '0');
 
const message = await page.locator("#d2");
await assertMinCharLength(message,5);

    expect(h2value > 5).toBeTruthy();
});

const assertMinCharLength= async(locator:any,minLength:number)=>{
    const text = await locator.textContent();
    await expect((text || '').length).toBeGreaterThan(minLength);
}




test("file Handling test",async({page})=>{
    await page.goto("http://127.0.0.1:5500/tests/assert.html");
   // await page.pause();
 
    // file uploading test case
    const filepath:string = "tests\\output.html";
    await page.setInputFiles("input[type='file']",filepath);
    await page.locator('button[type="submit"]').click();
 
});