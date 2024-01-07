import { Page } from "@playwright/test";

export class NavigationPage
{
    readonly page:Page;
    constructor(page:Page)
    {
    this.page=page;
    }

    async pageNavigateTo(strUrl:string)
    {
    await this.page.goto(strUrl);
    }
}