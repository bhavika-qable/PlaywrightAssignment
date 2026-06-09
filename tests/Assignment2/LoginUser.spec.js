const { test, expect } = require('@playwright/test');

test('TC-02 - Login User with correct email and password', async ({ page }) => {
    
    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='Login to your account']")).toBeVisible();

    await page.locator("//input[@data-qa='login-email']").fill('testuser14@uuygt.com');
    await page.locator("//input[@placeholder='Password']").fill('Test@123');

    await page.locator("//button[normalize-space()='Login']").click();

    await expect(page.locator("//li[10]//a[1]")).toBeVisible();

    //Delete a/c code
    //await page.locator("//a[normalize-space()='Delete Account']").click(); 

    //await expect(page.locator("//b[normalize-space()='Account Deleted!']")).toBeVisible();









});