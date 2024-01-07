import { Locator, Page } from '@playwright/test';

export class TodoFormsPage
{
    readonly page:Page;
    readonly commonPageLocatorVar:Locator;

    constructor(page:Page)
    {
       this.page=page;
       this.commonPageLocatorVar = page.locator("#new-todo");
    }

    async enterInputTextToField(strInputText:string)
    {
    await this.commonPageLocatorVar.fill(strInputText);
    await this.commonPageLocatorVar.press("Enter");
    }



}