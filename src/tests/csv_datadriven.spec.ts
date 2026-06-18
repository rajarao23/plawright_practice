import {expect, Locator, test, } from "@playwright/test";
import fs from 'fs';
import {parse} from 'csv-parse/sync';  

const csvPath= "./src/test_data/data.csv";   
const fileContent=fs.readFileSync(csvPath, 'utf-8'); 
const csvRecords:any=parse(fileContent, {columns:true, skip_empty_lines:true});
  
for(const data of csvRecords) {  
test(`login test with ${data.username, data.password}`, async({page})=>{
 await page.goto(process.env.BASE_URL!); 
 await page.locator("//input[@name='user_name']").fill(data.username); 
 await page.locator("//input[@name='user_password']").fill(data.password);
 await page.locator("//input[@id='submitButton']").click();
 
 if(data.validity.toLowerCase()==='valid'){  
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




















