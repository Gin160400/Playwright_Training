import { test, expect } from '@playwright/test';
import { type } from 'os';

var username = "Gindangg1604";
var password = "Gin123456";

test.describe('Add new employee', async() => {

test('login page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');  
  
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

  //Add new employee
  await page.locator("//span[text()='PIM']").click();
  await page.locator("//div[@class='orangehrm-header-container']/child::button").click();
  await page.locator("//input[@name='firstName']").fill("Gin");
  await page.locator("//input[@name='lastName']").fill("Dang");

  await page.locator("//span[@class='oxd-switch-input oxd-switch-input--active --label-right']").click();
  await page.locator("(//input[@class='oxd-input oxd-input--active'])[3]").fill(username);
  await page.locator("(//input[@type='password'])[1]").fill(password);
  await page.locator("(//input[@type='password'])[2]").fill(password);
  await page.locator("//button[@type='submit']").click();
  await page.waitForTimeout(8000);
  
});
test('login new employee', async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); 

  await page.locator("//input[@name='username']").fill(username);
  await page.locator("//input[@name='password']").fill(password);
  await page.locator("//button[@type='submit']").click();
});
})

