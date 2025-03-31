import { test, expect } from '@playwright/test';
import { type } from 'os';

test('login page', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', {name:'username'}).click();
  await page.getByRole('textbox', {name:'username'}).clear();
  await page.getByRole('textbox', {name:'username'}).fill('Admin');
  await page.getByRole('textbox', {name:'password'}).click();
  await page.getByRole('textbox', {name:'password'}).clear();
  await page.getByRole('textbox', {name:'password'}).fill('admin123');
  await page.getByRole('button', {name:'Login'}).click();
});