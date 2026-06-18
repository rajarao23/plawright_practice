
import { Page, Locator, expect , test, Response, FrameLocator } from '@playwright/test';
 
export class WebUtil {

  protected page : Page;

  constructor(page : Page) {
    this.page = page;
  }

  // Navigate to URL
   async hitUrl(url: string): Promise<Response | null> {
    return this.page.goto(url, { waitUntil: 'load' });
  }

  // Navigate Back
   async goBack() :Promise<Response | null> {
   return await test.step('[INFO] ℹ️ navigating back', async () => {
        return this.page.goBack();
    }); 
 }

 // Navigate forward
   async goForward(): Promise<Response | null> {
    return await test.step('[INFO] ℹ️ navigating forward', async () => {
        return this.page.goForward(); 
    });
 }

 // Refresh 
   async reload(): Promise<Response | null>{
   return await test.step('[INFO] ℹ️ refreshing the page', async () => {
        return this.page.reload(); 
    });
 } 

 // Get locator
   locator(locator: string) : Locator {
   return this.page.locator(locator); 
 };

 // Get title
   async getTitle(): Promise<string>{
   return await this.page.title();
 };
  
 // Get url
   async getUrl() : Promise<string>{
   return  this.page.url(); 
 };

  // Close
   async close():Promise<void>{
   await this.page.close();
 }; 
 
  // Clear 
   async clear(locator: string):Promise<void>{
   await this.locator(locator).clear();
 };  

  // Click element
 async click(locator: string, elementName :string): Promise<void> {
   await test.step('[INFO] ℹ️ Clicking on element: '+elementName, async () => {
   await this.locator(locator).click();  
   }); 
  } 

 // Check
 async check(locator: string):Promise<void>{
   await test.step("[INFO] ℹ️ selecting 'Check Box' ", async ()=>{
   await this.locator(locator).check();
  });
 }

 // Uncheck 
 async uncheck(locator:string):Promise<void>{
   await test.step("[INFO] ℹ️ un-selecting 'Check Box' ", async() =>{
   await this.locator(locator).uncheck(); 
  });
 }

  // Fill text
  async fillValue(locator: string, text: string, elementName: string) : Promise<void> {
    await test.step("[INFO] ℹ️ Entering text '"+text+"' into : "+elementName, async ()=>{   
    await this.locator(locator).fill(text);
    });
  }

  // Type text
  async typeValue(locator: string, text: string, elementName: string) : Promise<void> {
    await test.step("[INFO] ℹ️ Entering text '"+text+"' into : "+elementName, async ()=>{   
    await this.locator(locator).type(text);
    });
  } 

  // inner text
  async getText(locator: string): Promise<string> { 
    return await test.step('[INFO] ℹ️ fetching text - ', async ()=>{
    return  await this.locator(locator).innerText();
    });  
  }

 // TextContent
  async textContent(locator : string): Promise<string | null>{
    return await test.step('[INFO] ℹ️ fetching text - ', async ()=>{
    return  await this.locator(locator).innerText();
    }); 
  } 

  // Select dropdown by text
  async selectByText(locator: string, text: string): Promise<void> {
    await test.step('[INFO] ℹ️ selecting ListBox by text - '+text, async () => {
    await this.locator(locator).selectOption(text); 
    });
  }

  // Select dropdown by index
  async selectByIndex(locator: string, num: number): Promise<void> {
    await this.locator(locator).selectOption({index: num});
  } 

 // Select dropdown by value Attribute
  async selectByValue(locator: string, valueAttribute: string): Promise<void> {
    await this.locator(locator).selectOption({value: valueAttribute});
  }

  // Check visibility of element
  async isVisible(locator: string): Promise<boolean> {
    return await this.locator(locator).isVisible();
  }

  // check enability of element
  async isEnable(locator: string): Promise<boolean>{
    return await this.locator(locator).isEnabled();
  }

  // check box confirmation 
  async isChecked(locator: string): Promise<boolean> {
   return await this.locator(locator).isChecked();
  }

  // Assertion: text appears inside input box or not
  async verifyText(locator: string, expected: string): Promise<void> {
    await expect(this.locator(locator)).toHaveText(expected);
  }

  // Assertion: text contains inside the actual text or not
  async verifyContainsText(locator: string, expected: string): Promise<void> {
    await expect(this.locator(locator)).toContainText(expected);
  }

  // mouse hover
  async hover(locator: string): Promise<void> {
    await this.locator(locator).hover(); 1
  }

  // Double click
  async doubleClick(locator: string, elementName: string): Promise<void>{
    test.step("[INFO] ℹ️ action 'Double Click' performing on : "+elementName, async() =>{
      await this.locator(locator).dblclick();
    })
  }

  // Right click
  async rightClick(locator: string, elementName: string): Promise<void>{
    await test.step("[INFO] ℹ️ action 'Right Click' performing on : "+elementName, async() =>{
    await this.locator(locator).click({button: "right"});
    });
  }
  
  // Scroll into view
  async scrollToElement(locator: string, elementName: string): Promise<void> {
   await test.step("[INFO] ℹ️ scrolling from Top to element Name:- "+elementName, async()=>{
   await this.locator(locator).scrollIntoViewIfNeeded();
   });   
  } 

  // framelocator
    async handleFrame(locator: string): Promise<FrameLocator> {
    return await test.step("[INFO] ℹ️ switching control to 'Iframe'", async () => {
        // Direct frameLocator ka use karein
        return this.page.frameLocator(locator);
    }); 
}

  // Take screenshot
  async takeScreenshot(path: string): Promise<void> {
    await this.page.screenshot({ path });
  } 

  // Generic wait
  async staticWait(ms: number): Promise<void> {
    await this.page.waitForTimeout(ms);  
  }

  // Wait for (state) element visible 
  async waitForVisibilityOfElement(locator: string, timeout: number = 5000): Promise<void> {
    await this.locator(locator).waitFor({ state: 'visible', timeout });
  }

  // Wait for element hidden
  async waitForHidden(locator: string, timeout: number = 5000): Promise<void> {
    await this.locator(locator).waitFor({ state: 'hidden', timeout });
  }
}