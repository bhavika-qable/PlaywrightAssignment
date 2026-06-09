const { test, expect } = require('@playwright/test');

test('TC-05 - Register User with existing email', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='New User Signup!']")).toBeVisible();

    await page.locator("//input[@placeholder='Name']").fill('test');
    await page.locator("//input[@data-qa='signup-email']").fill('testuser14@uuygt.com');

    await page.locator("//button[normalize-space()='Signup']").click();

    await expect(page.locator("text=Email Address already exist!")).toBeVisible();

    await page.click("//input[@name='submit']");

    

});