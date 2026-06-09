const { test, expect } = require('@playwright/test');

test('TC-08 - Verify all Products and products detail page', async ({ page }) => {

    await page.goto('https://automationexercise.com/', {
        waitUntil: 'domcontentloaded'
    });

    await expect(page).toHaveTitle("Automation Exercise");

    await page.click("//a[@href='/products']");
    await page.waitForTimeout(1000);

    await expect(page).toHaveURL("https://automationexercise.com/products");

    await expect(page.locator("//div[@class='features_items']")).toBeVisible();

    //await page.locator("a[href='/product_details/1']").click();
    await page.locator('text=View Product').first().click();
    await page.waitForTimeout(1000);

    //await expect(page).toHaveURL("https://automationexercise.com/product_details/1");
    await expect(page).toHaveURL(/product_details/);

    //step - 9

   await expect(page.locator("//h2[normalize-space()='Blue Top']")).toBeVisible();

   await expect(page.locator("//p[normalize-space()='Category: Women > Tops']")).toBeVisible();

   await expect(page.locator("//span[normalize-space()='Rs. 500']")).toBeVisible();
   
   await expect(page.locator("text=Availability:")).toBeVisible();

    await expect(page.locator("text=Condition:")).toBeVisible();

    await expect(page.locator("text=Brand:")).toBeVisible();

/*await expect(page.locator('.product-information'))
    .toContainText('Availability');

await expect(page.locator('.product-information'))
    .toContainText('Condition');

await expect(page.locator('.product-information'))
    .toContainText('Brand');
*/

});