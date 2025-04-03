import { test, expect } from '@playwright/test';
import { type } from 'os';
import path from 'path';
var username = "Gindangg1604";
var password = "Gin123456";

test.describe('Recruitment_ Xpath/ CSS', async() => {

test('login page', async ({ page }) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
  
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");
    await page.locator("//button[@type='submit']").click();

    await page.locator("//span[text()='Recruitment']").click();
    await page.locator("//button[@class='oxd-button oxd-button--medium oxd-button--secondary']").click();
    await page.locator("//input[@name='firstName']").fill("Gin");
    await page.locator("//input[@name='lastName']").fill("Dang");
    await page.locator("//div[@class='oxd-select-text oxd-select-text--active']").selectOption("Automation Testeraa");
    await page.locator("//input[@placeholder='Type here'])[1]']").fill("gindang@gmail.com");
    await page.locator("//input[@placeholder='Type here'])[2]']").fill("12345");    
    
    await page.getByLabel('Upload file').setInputFiles(path.join(__dirname, 'Lesson+01_+exercises.pdf'));

    

});
})

