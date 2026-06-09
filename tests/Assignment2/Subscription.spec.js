const { test, expect } = require('@playwright/test');

test('TC-10 - Verify Subscription in home page', async ({ page }) => {

    
await page.goto('https://automationexercise.com/', {
    waitUntil: 'domcontentloaded'
});

await expect(page).toHaveTitle("Automation Exercise");

// Step 4 - Scroll down to footer
await page.locator('#footer').scrollIntoViewIfNeeded();

await expect(page.locator("//h2[normalize-space()='Subscription']")).toBeVisible();

await page.locator('#susbscribe_email').fill('test123@gmail.com');

await page.locator("//i[@class='fa fa-arrow-circle-o-right']").click();

await expect(page.locator('text=You have been successfully subscribed!')).toBeVisible();



});