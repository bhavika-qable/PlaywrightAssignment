const { test, expect } = require('@playwright/test');

test('TC-04 - Logout User', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toBeVisible();

    await page.locator("[data-qa='login-email']").fill('testuser14@uuygt.com');

    await page.locator("[data-qa='login-password']").fill('Test@123');

    await page.locator("[data-qa='login-button']").click();

    await expect(page.locator("//a[contains(text(),'Logged in as')]")).toBeVisible();

    await page.locator("//a[normalize-space()='Logout']").click();

    await expect(page).toHaveURL(/login/);
});