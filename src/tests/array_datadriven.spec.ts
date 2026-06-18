import {expect, Locator, test, } from "@playwright/test";

// array se data reading...
const loginData:string[][]=[
    ['admin', 'admin', 'valid'],
    ['admin', 'admin_123', 'invalid'],
    [" ", " ", 'invalid']
]  
  
for(const [username, password, validity] of loginData){ 
test(`login test with ${username} and ${password}`, async({page})=>{
 await page.goto(process.env.BASE_URL!); 
 await page.locator("//input[@name='user_name']").fill(username); 
 await page.locator("//input[@name='user_password']").fill(password);
 await page.locator("//input[@id='submitButton']").click();
 
 if(validity.toLowerCase()==='valid'){  
    console.log("PASSED!!! It's a valid login...");
    await expect(page).toHaveTitle("Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM");
 }else{
        console.log("It's a invalid login...but PASSED because expected error caught!!!");
   let errorText:Locator= page.locator("//div[@class='errorMessage']");
   //await expect(page).toHaveTitle("vtiger CRM 5 - Commercial Open Source CRM");
   await expect(errorText).toBeVisible(); 
   console.log("Error Message - "+await errorText.innerText());

 } 
})
} 




















