import {expect, Locator, test, } from "@playwright/test";

import fs from 'fs';
const jsonPath= "./src/test_data/data.json";
const loginData=JSON.parse(fs.readFileSync(jsonPath, 'utf-8')); 

// json se data reading only in two line
//1. import fs from 'fs';
//2. const loginData=JSON.parse(fs.readFileSync("./src/test_data/data.json", 'utf-8'));   

 
// array se data reading...
// const loginData:string[][]=[
//     ['admin', 'admin', 'valid'],
//     ['admin', 'admin_123', 'invalid'],
//     [" ", " ", 'invalid'] 
// ]  
   
for(const data of loginData){ 
test(`login test with ${data.username, data.password}`, async({page})=>{ 
 await page.goto(process.env.BASE_URL!);  
 await page.locator("//input[@name='user_name']").fill(data.username); 
 await page.locator("//input[@name='user_password']").fill(data.password);
 await page.locator("//input[@id='submitButton']").click();
 
 if(data.validity.toLowerCase()==='valid'){  
    console.log("PASSED!!! It's a valid login...");
    await expect(page).toHaveTitle(" dministrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
 }else{
        console.log("It's a invalid login...but PASSED because expected error caught!!!");
   let errorText:Locator= page.locator("//div[@class='errorMessage']");
   //await expect(page).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
   await expect(errorText).toBeVisible(); 
   console.log("Error Message - "+await errorText.innerText());

 } 
})
}




















