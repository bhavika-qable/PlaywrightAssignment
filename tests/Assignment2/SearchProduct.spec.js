const { test, expect } = require('@playwright/test');

test('TC-09 - Search products', async ({ page }) => {

    // Step 1 & 2
await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded'
});

// Step 3
await expect(page).toHaveTitle("Automation Exercise");

// Step 4
await page.click("//a[@href='/products']");

// Step 5
await expect(page).toHaveURL("https://automationexercise.com/products");

// Step 6
await page.locator('#search_product').fill('Blue Top');
await page.locator('#submit_search').click();

// Step 8
await expect(page.locator("(//p[contains(text(),'Blue Top')])[1]")).toBeVisible();

// Step 7
await expect(
    page.locator("//h2[normalize-space()='Searched Products']")).toBeVisible();




});