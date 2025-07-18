import { test, expect, chromium, Locator, Page, Browser } from '@playwright/test';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });


test("check title",async({page})=>{
  await page.goto("http://hematitecorp.com/")
  await expect(page).toHaveTitle("Hematite");
});

test("check addition of two number",async({page})=>{
await page.goto("http://127.0.0.1:5500/tests/work.html");
await page.fill('#txt1','5');
await page.fill('#txt2','3');
await page.click('#btnadd');

const result = await page.textContent('#res');
await expect(result?.trim()).toBe('8');
})


// test("login test", async()=>{
//   const browser: Browser = await chromium.launch({headless:false});
//   const page: Page = await browser.newPage();
//   await page.goto("http://quiz.hematitecorp.com/#/");
//   const email:Locator = await page.locator("#email");
//   const password: Locator = await page.locator("#password");
//   const submitButton:Locator = await page.locator("[type=submit]");

//   await email.fill("fahimbasha00@gmail.com");
//   await password.fill("Fahim@ece123");
//   await submitButton.click();

//   const title = await page.title();
//   console.log("Home page title ",title);
//   await page.screenshot({path:'VoucherCode.png'});

//  expect(title).toEqual("Quiz App");

//   //browser.close();
  
// })


//import { Browser, chromium, Locator, Page, test } from "playwright/test";
 
test("locator test",async()=>{
    const browser:Browser=await chromium.launch({headless:false,channel:'chrome'});
    const page:Page=await browser.newPage();
    await page.goto("http://127.0.0.1:5500/tests/work2.html");
 
    const fname:Locator=await page.locator('#txt1');
    const logo:Locator = await page.locator(".logo");
    
    const logoExist = await logo.isEnabled();
    const contact:Locator = await page.locator(".txtContact")
    
    await contact.fill("888888");

    const heading:Locator = await page.locator("text='registration form");
    console.log(heading);
    const headingExit = await heading.isEnabled();
    console.log(headingExit); 

    
 
    await fname.fill("Muthupandi S");
});


test('login test', async () => {
    const browser: Browser = await chromium.launch({ headless: false });
    const page: Page = await browser.newPage();
    await page.goto('http://127.0.0.1:5500/tests/work2.html');
    const fName: Locator = await page.locator('#txt1');
    const password: Locator = await page.locator('#txt2');
    await fName.fill('Fahim');
    await password.fill('Fahim@123');
    const logo:Locator = await page.locator('.logo');
    const item = await logo.isEnabled();
    console.log(item);
    const contact:Locator = await page.locator('.txtContact');
    await contact.fill("888888888");
 
    //use of
    const heading:Locator = await page.locator("text=Registration Form");
    const headingExit = await heading.isEnabled();
    console.log(headingExit);
 
    // use of css property and tag name
    const address:Locator = await page.locator("css=input#txtaddress");
    await address.fill("SIPCOT IT PARK, Chennai");
 
    const pincode:Locator = await page.locator("css=input#txtpincode");
    await pincode.fill("600001");

    const email:Locator = await page.locator('xpath=//input[@name="email" and @type="email"]');
    await email.fill("admin@gmail.com");

});