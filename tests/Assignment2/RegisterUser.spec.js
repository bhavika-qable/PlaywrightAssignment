const {test , expect} = require('@playwright/test');

test('TC-01 - Register User', async({ page })=> {

    await page.goto('https://automationexercise.com/' , {
    waitUntil: 'domcontentloaded'
  });

    await expect(page).toHaveTitle('Automation Exercise');

    await page.click("//a[normalize-space()='Signup / Login']");

    await expect(page.locator("//h2[normalize-space()='New User Signup!']")).toBeVisible();

    await page.locator("//input[@placeholder='Name']").fill('test');
    await page.locator("//input[@data-qa='signup-email']").fill('testuser14@uuygt.com');

    await page.locator("//button[normalize-space()='Signup']").click();

    await expect(page.locator("//b[normalize-space()='Enter Account Information']")).toBeVisible();
   
    await page.check('#id_gender2');
    await page.locator('#password').fill('Test@123');

    await page.selectOption('#days', '10');
    await page.selectOption('#months','5');
    await page.selectOption('#years','1999');

    await page.check('#newsletter');
    await page.check('#optin');

  await page.locator('#first_name').fill('Test');
  await page.locator('#last_name').fill('User');
  await page.locator('#company').fill('ABC Pvt Ltd');
  await page.locator('#address1').fill('Ahmedabad');
  await page.locator('#address2').fill('Gujarat');
  await page.selectOption('#country', 'India');
  await page.locator('#state').fill('Gujarat');
  await page.locator('#city').fill('Ahmedabad');
  await page.locator('#zipcode').fill('380001');
  await page.locator('#mobile_number').fill('9876543210');
  
  await page.locator("//button[normalize-space()='Create Account']").click();

  await expect(page.locator("h2[class='title text-center'] b")).toBeVisible();

  await page.locator("(//a[normalize-space()='Continue'])[1]").click();

  await expect(page.locator("//li[10]//a[1]")).toBeVisible();

  //await page.click("a[href='/delete_account']");

  //await expect(page.locator("//b[normalize-space()='Account Deleted!']")).toBeVisible();

  //await page.locator("//a[normalize-space()='Continue']").click();


})