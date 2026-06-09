const { test, expect } = require('@playwright/test');

test('TC-06 - contactUs Form', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[normalize-space()='Contact us']");

    await expect(page.locator("//h2[normalize-space()='Get In Touch']")).toBeVisible();

    await page.locator("//input[@placeholder='Name']").fill('test');
    await page.locator("//input[@placeholder='Email']").fill('testuser1234@uuygt.com');
    await page.locator("//input[@placeholder='Subject']").fill('This is subject field');
    await page.locator("//textarea[@id='message']").fill('This is message filed in contact us form');

    // Step 7 (Upload file)
    await page.locator("input[name='upload_file']").setInputFiles('tests/uploadedfile/dummy-pdf_2.pdf');


    //step 9(Alert window-ok)
    page.on('dialog', async dialog => { await dialog.accept(); });

    await page.waitForTimeout(2000);
    
    await page.click("//input[@name='submit']");

    await page.waitForTimeout(2000);

    await page.waitForSelector('.status.alert.alert-success');

    await expect(page.locator('.status.alert.alert-success')).toBeVisible();

    await expect(page.locator('.status.alert.alert-success')).toHaveText(/Success!/);

    await page.locator("//span[normalize-space()='Home']").click();

    await expect(page).toHaveURL('https://automationexercise.com/');

    





});