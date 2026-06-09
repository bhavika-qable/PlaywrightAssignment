const { test, expect } = require('@playwright/test');

test('TC-07 - Verify test case page', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[contains(text(),'Test Cases')]");

    await expect(page).toHaveURL("https://automationexercise.com/test_cases");

});