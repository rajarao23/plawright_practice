import {test }from "@playwright/test";
import { LoginPage } from "../pages/loginPage";
import { HomePage } from "../pages/homePage";
import { LeadsPage } from "../pages/leadsPage";

test('TC_001 - create lead with mandatory field', async({page})=> {

  const login = new LoginPage(page);
  await login.navigateToUrl(process.env.BASE_URL!);
  
  await login.login("admin", "admin");     
    
  const homePage = new HomePage(page); 
  await homePage.clickOnLeadsModule(); 

  const leads= new LeadsPage(page); 
  await leads.clickOnCreateLeadIcon();
  await leads.selectNameTitle("Mr.");
  await leads.enterFirstname("pankaj"); 
  await leads.enterLastname("pal");  
  await leads.enterCompany("Accenture");
  await leads.enterCity("Prayagraj");
  // coldcall, public relation, Direct mail, existing customer, website, employee, self generated
  await leads.selectLeadSource("Direct Mail");

  // Banking, consulting, education, engineering, entertainment, finance, healthCare, insurance, media, government
  await leads.selectIndustry("Engineering");

  // Cold, hot, junk lead, lost lead, contact in future, not contacted, qualified, pre qualified, warm.
  await leads.selectLeadStatus("Contacted");
  await leads.scrollToSave();  
  //await leads.clickOnSaveButton(); 
  
   

})









