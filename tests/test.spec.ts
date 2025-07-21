import { test, expect, chromium, Locator, Page, BrowserContext,Browser } from '@playwright/test';


test('testing browser context', async () => {
    const browser: Browser = await chromium.launch({ headless: false,channel:"chrome" });
    //const page: Page = await browser.newPage();
    //1
    const browserContext_1:BrowserContext = await browser.newContext();
    const page1:Page = await browserContext_1.newPage();
    await page1.goto("http://quiz.hematitecorp.com/");
    const email:Locator = page1.locator("#email");
    const password:Locator = await page1.locator("#password");
    const submitButton: Locator = await page1.locator("[type='submit']");

    await email.fill("fahimbasha00@gmail.com");
    await password.fill("Fahim@ece123");
    await submitButton.click();

    const title = await page1.title();
    console.log("Home page title",title);
    await page1.screenshot({path:'VoucherCode.png'});

    expect(title).toEqual("Quiz App");


});



test("auth test",async ()=>{
    const browser:Browser = await chromium.launch({headless:false,channel:"chrome"});
    const browserContext1:BrowserContext = await browser.newContext();
    const page:Page = await browserContext1.newPage();
    // const page:Page = await browserContext1

    // await page.goto("http://quiz.hematitecorp.com/");
    const userId:string = "admin@gmail.com";
    const userPass:string = "admin@123";
    const authHeader = "Basic "+btoa(userId+":"+userPass);
    
    page.setExtraHTTPHeaders({Authorization:authHeader});

    await page.goto("http://quiz.hematitecorp.com/");
    //browserContext1.close();
   // browser.close();
})


