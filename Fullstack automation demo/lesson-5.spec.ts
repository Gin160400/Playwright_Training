import { test, expect } from '@playwright/test';

test('Bai 1', async ({ page }) => {
    await page.goto ("https://material.playwrightvn.com/");

    await page.locator("//a[contains(text(), 'Bài học 1: Register Page')]").click();
    await page.locator("input#username").fill("Gindang");
    await page.locator("input#email").fill("gin@gmail.com");
    await page.locator("input#female").check();
    await page.locator("//label[text()='Traveling']").check();
    await page.locator("select#interests").selectOption([
        "Technology", "Science"
    ]);
    await page.locator("select#country").selectOption("Canada");
    await page.locator("input#dob").fill("2020-04-16");
    await page.locator("input#profile").setInputFiles("file upload/exemple.jpg");
    await page.locator("//button[@type='submit']").click();
});

test('Bai 2', async ({ page }) => {
    await page.goto ("https://material.playwrightvn.com/");

    await page.locator("//a[contains(text(), 'Bài học 2: Product page')]").click();
    await page.locator("//button[@data-product-id='1']").dblclick();
    await page.locator("//button[@data-product-id='2']").click({clickCount: 3})
    await page.locator("//button[@data-product-id='3']").click();
});

test('Bai 3', async ({ page }) => {
    await page.goto ("https://material.playwrightvn.com/");

    await page.locator("//a[contains(text(), 'Bài học 3: Todo page')]").click();
    for(var i = 0; i <10;i++){
        await page.locator("input#new-task").fill("Gia tri: " + i);
        await page.locator("button#add-task").click();
    }

    await test.step("Xoa cac todo co so le", async() => {
        page.on('dialog', async dialog =>{
            await dialog.accept();
        })
        for(let i; i<10;i++){
            if(i % 2==0 && i < 5)
                await page.locator('//button[@id="gia-tri-${i}-delete"]').click();
        }  
})  
});