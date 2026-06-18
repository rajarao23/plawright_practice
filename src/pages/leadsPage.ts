import { Page } from "@playwright/test";
import { WebUtil } from "../utils/webUtil";


export class LeadsPage{
    private readonly page:Page;
    private readonly utils:WebUtil;  
    private readonly createLeadIconLocator:string;
    private readonly nameTitleLocator:string
    private readonly firstnameLocator:string;
    private readonly lastnameLocator:string;
    private readonly componyLocator:string;
    private readonly cityLocator:string;
    private readonly leadSourceLocator:string;
    private readonly leadStatusLocator:string;
    private readonly industryLocator:string;
    private readonly saveButtonLocator:string;
     

constructor(page:Page){
    this.page=page;
    this.utils=new WebUtil(page);
    this.createLeadIconLocator="//img[@src='themes/softed/images/btnL3Add.gif']";
    this.nameTitleLocator="//select[@name='salutationtype']";
    this.firstnameLocator="//input[@name='firstname']";
    this.lastnameLocator="//input[@name='lastname']";
    this.componyLocator="//input[@name='company']";
    this.cityLocator="//input[@name='city']";
    this.industryLocator="//select[@name='industry']";
    this.leadSourceLocator="//select[@name='leadsource']";
    this.leadStatusLocator="//select[@name='leadstatus']";
    
    this.saveButtonLocator="//input[@class='crmButton small save']";

}

async clickOnCreateLeadIcon(){
    await this.utils.waitForVisibilityOfElement(this.createLeadIconLocator, 10000);
    await this.utils.click(this.createLeadIconLocator, "Create Lead + icon");

} 

async selectNameTitle(title:string){
   await this.utils.selectByText(this.nameTitleLocator, title);
}
async enterFirstname(firstnameValue:string){
   await this.utils.fillValue(this.firstnameLocator, firstnameValue, "firstname field");
} 
async enterLastname(lastnameValue:string){
   await this.utils.fillValue(this.lastnameLocator, lastnameValue, "lastname field");
}
async enterCompany(company:string){  
   await this.utils.fillValue(this.componyLocator, company, "company field");
}
async enterCity(city:string){
   await this.utils.fillValue(this.cityLocator, city, "city field");
} 

async selectLeadSource(leadSource:string){
    await this.utils.selectByText(this.leadSourceLocator, leadSource);
}

async selectLeadStatus(leadStatus:string){
   await this.utils.selectByText(this.leadStatusLocator, leadStatus); 
} 

async selectIndustry(industry:string){
   await this.utils.selectByText(this.industryLocator,industry);
}

async clickOnSaveButton(){
    await this.utils.click(this.saveButtonLocator, "Save Button");
}

async scrollToSave(){
    await this.utils.scrollToElement(this.saveButtonLocator, "Save Button");
}


} 



