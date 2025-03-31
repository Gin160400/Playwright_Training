import {test} from '@playwright/test'

test('Basic action', async({page}) => {
    await page.goto("https://material.playwrightvn.com/018-mouse.html");

    await page.locator("//div[@id='clickArea']").click;  //single click
    await page.locator("//div[@id='clickArea']").dblclick;  //double click

    await page.locator("//div[@id='clickArea']").click({
        button: 'right' 
    }); //right click

    await page.locator("//div[@id='clickArea']").click({
        modifiers: ["Shift"] 
    }); //keep + click
 
})

test('Basic input', async({page}) => {
    await page.goto("https://material.playwrightvn.com/01-xpath-register-page.html");
    await page.locator("input#username").fill("GinDang");  //input text 

    //Check radio button
    await page.locator("input#male").check();

    //Check checkbox button
    await page.locator("input#traveling").check();

    await page.locator("input#traveling").uncheck();
    //Kiểm tra một checkbox có được check hay không
    const ischeck = await page.locator("input#traveling").isChecked();
    console.log(ischeck);

    //select option trong dropdown
    await page.locator("//select[@id='country']").selectOption("Canada");
    

})