import { Locator, Page } from "@playwright/test";

export class ToDoListPage
{
    readonly displayedToDoItemsVar:Locator;
    readonly page:Page;
    readonly remNoOfItems:Locator;
    
    constructor(page:Page)
    {
    this.page=page;
    this.displayedToDoItemsVar = page.locator(".todo-list label");
    this.remNoOfItems=page.locator("#todo-count");
    }

}