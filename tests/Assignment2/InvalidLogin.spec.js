const { test, expect } = require('@playwright/test');

test('TC-03 - Login User with incorrect email and password', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");
    
    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toBeVisible();

    await page.locator("[data-qa='login-email']").fill('wronguser@test.com');

    await page.locator("[data-qa='login-password']").fill('WrongPassword');

    await page.locator("[data-qa='login-button']").click();

    await expect(page.locator("text=Your email or password is incorrect!")).toBeVisible();

});