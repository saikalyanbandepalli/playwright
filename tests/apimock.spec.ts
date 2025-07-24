import { test, expect } from '@playwright/test';

test("should mock get request for product list", async ({ page }) => {
    console.log("Running mock test for product list");

    // Intercept the request to the specified API URL
    await page.route("http://127.0.0.1:5500/tests/mockapi.html", (route) => {
        console.log("Intercepting request to mockapi.html");
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                {
                    "userId": 114777,
                    "id": 1,
                    "title": "this is checked file",
                    "body": "this is checked file"
                }
            ]),
        });
    });

    // Navigate to the mocked URL
    await page.goto("http://127.0.0.1:5500/tests/mockapi.html");

    // Wait for the user list to be populated
    try {
        await page.waitForSelector("#user-list .user", { timeout: 5000 });
        console.log("User  list populated successfully.");
    } catch (error) {
        console.error("User  list not populated:", error);
    }

    // Extract product list from the page
    const productList = await page.locator("#user-list").allTextContents();
    console.log("Product List:", productList);

    // Assert that the product list contains specific items
    await expect(productList).toContain("this is checked file");
});
