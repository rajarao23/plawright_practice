import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


 const homePageTitle:string="Administrator - Home - vtiger CRM 5 - Commercial Open Source CRM";
 const expectedErrorMessage:string="You must specify a valid username and password."; 

test.describe('Login Module', () => {   
  let login: LoginPage; 

  test.beforeEach(async ({page}) => { 
    login = new LoginPage(page); 
    await login.navigateToUrl(process.env.BASE_URL!);     
  });  

  test('TC_001 - verify valid login ', async ({ page}) => {    
   // beforeEach me browser open and url hit hoga. 
    console.log(process.env.MESSAGE!); 
    await login.login(process.env.USER_NAME!, process.env.PASSWORD!);   
    await expect(page).toHaveTitle(homePageTitle);
   }); 

  test('TC_002 - verify login with invalid data ', async ({ page }) => {
    await login.login("ajay", "aj@576");
    // Validating errorMessage!!!  
    expect(await login.errorMessageText()).toContain(expectedErrorMessage);
  }); 
 
  test('TC_003 - verify login with blank username ', async ({ page }) => {
    await login.login(" ", "admin"); 
    expect(await login.errorMessageText()).toContain(expectedErrorMessage);
  }); 
 
  test('TC_004 - verify login with blank password ', async ({ page}) => {
    await login.login("admin", " ");  
    expect(await login.errorMessageText()).toContain(expectedErrorMessage); 
  }); 
 
    test('TC_005 - verify login with blank fields ', async ({ page }) => {
    await login.login(" ", " "); 
    expect(await login.errorMessageText()).toContain(expectedErrorMessage);
  });

  test('TC_006 - verify login using special character password only', async ({ page }) => {
    await login.login("admin", "@#$%^&*@#"); 
    expect(await login.errorMessageText()).toContain(expectedErrorMessage); 
  }); 

  test('TC_007 - verify login using number in username ', async ({ page }) => {
    await login.login("876374", "admin"); 
    expect(await login.errorMessageText()).toContain(expectedErrorMessage);
  });

   


});