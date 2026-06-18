import { Page } from "@playwright/test"; 
import { WebUtil } from "../utils/webUtil";


export class HomePage{ 
    private readonly page: Page;
    private readonly utils:WebUtil;
    private readonly leadsModuleSelector:string;
    private readonly contactsModuleSelector:string;
    private readonly organizationModuleLocator:string;
    private readonly opportunityModuleLocator:string;   

constructor(page: Page) { 
    this.utils=new WebUtil(page); //or super(page) 
    this.page= page; 
    this.leadsModuleSelector="//a[@href='index.php?module=Leads&action=index']"; 
    this.contactsModuleSelector="//a[@href='index.php?module=Contacts&action=index']";
    this.organizationModuleLocator="//a[@href='index.php?module=Accounts&action=index']"; 
    this.opportunityModuleLocator="//a[@href='index.php?module=Potentials&action=index']";  

} 
// leads module  
async clickOnLeadsModule(){
    //await this.utils.waitForVisibilityOfElement(this.leadsModuleSelector, 10000); 
    await this.utils.click(this.leadsModuleSelector, "Leads Module");  
}

// contacts module
async clickOnContactsModule(){
    await this.utils.click(this.contactsModuleSelector, "Contacts Module");   
}

// organization module
async clickOnOrganizationModule(){ 
   await this.utils.click(this.organizationModuleLocator, "Organization Module");    
}

// Opportunity module 
async clickOnOpportunityModule(){ 
   await this.utils.click(this.opportunityModuleLocator, "Opportunity Module");   
} 





}

