import { test, expect } from '@playwright/test';

test("should mock get request for product list", async ({ page }) => {
    console.log("Running mock test for product list");

    // Intercept the request to the specified API URL
    await page.route("https://jsonplaceholder.typicode.com/posts", (route) => {
        // Fulfill the request with a mock response
        route.fulfill({
            status: 200,
            contentType: 'application/json',
            body: JSON.stringify([
                {
                    "userId": 114777,
                    "id": 1,
                    "title": "this is checked file",
                    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
                }
            ]),
        });
    });

    // Navigate to the mocked URL (your local HTML file)
    await page.goto("http://127.0.0.1:5500/tests/mockapi.html"); // Ensure this matches your local setup

    // Wait for the user list to be populated
    //await page.waitForSelector("#user-list .user");

    // Extract product list from the page
    const productList = await page.locator(".user").allTextContents();
    console.log(productList);

    // Assert that the product list contains specific items
    await expect(productList).toContain("this is checked file");
});
