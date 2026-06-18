import {test,} from "@playwright/test";

test('amazon work flow', async({page})=>{

await page.goto('https://www.amazon.in/');
await page.locator("//a[text()='Mobiles']").click();
await page.locator("//img[@alt='M56']").scrollIntoViewIfNeeded();
await page.locator("//img[@alt='M56']").click();

await page.locator("//input[@id='add-to-cart-button']").nth(1).click();
await page.locator("//span[@class='a-button-inner']//a[contains(text(),'Go to Cart')]").click();

});

















