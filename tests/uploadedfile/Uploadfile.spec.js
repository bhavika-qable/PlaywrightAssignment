//reference :  https://playwright.dev/docs/input#upload-files


const {test , expect} = require('@playwright/test')

test('Single File', async ({page}) =>{

    await page.goto('https://practice.expandtesting.com/upload');

    await page.waitForSelector('#fileInput')    //wait for selector - until selector is not loaded

    await page.locator('#fileInput').click()
    
    //file upload from folder
    await page.locator('#fileInput').setInputFiles("path.join(__dirname, 'dummy-pdf_2 - Copy.pdf')");
    
    await page.waitForTimeout(2000);

    await page.locator('#fileSubmit').click();

})