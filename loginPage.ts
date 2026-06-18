import { Page, Locator,} from "@playwright/test";
import { WebUtil } from "../utils/webUtil";

export class LoginPage {  
      
private utils:WebUtil;    
protected  readonly page:Page;
private readonly userNameLocator : string;
private readonly passwordLocator : string; 
private readonly loginButtonLocator : string;
private readonly errorMessageLocator: string;
 
constructor(page:Page){  
 this.utils=new WebUtil(page);
 this.page=page; 
 this.userNameLocator="//input[@name='user_name']"; 
 this.passwordLocator="//input[@name='user_password']";
 this.loginButtonLocator="//input[@id='submitButton']";
 this.errorMessageLocator="//div[@class='errorMessage']";

} 
 
async navigateToUrl(url: string){ 
 await this.utils.hitUrl(url);  
} 

async errorMessageText()  {
  const text = await this.page.textContent(this.errorMessageLocator); 
  return text; 
} 

async login(userName:string, password: string) {
 // username
 await this.utils.fillValue(this.userNameLocator, userName, "username field");
 // password
  await this.utils.fillValue(this.passwordLocator, password, "password field"); 
 // loginButton
 await this.utils.click(this.loginButtonLocator, "Login Button"); 
       
} 




}