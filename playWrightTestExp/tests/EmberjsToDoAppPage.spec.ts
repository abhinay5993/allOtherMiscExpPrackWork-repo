import { test,expect } from "@playwright/test";

test('The Todo input field Should display a helpfull prompt.',
    async ({ page }) => {
        await page.goto('https://todomvc.com/examples/emberjs/');
        await expect(page.locator("#new-todo")).toHaveAttribute('placeholder', 'What needs to be done?');
    }
);

test('Should be able to add a single item.',
    async ({ page }) => {
        const commonPageLocatorVar = page.locator("#new-todo");
        const displayedToDoItemsVar = page.locator(".todo-list label");
        await page.goto('https://todomvc.com/examples/emberjs/');
        await commonPageLocatorVar.fill("Walk the Dog!");
        await commonPageLocatorVar.press("Enter");
        await expect(displayedToDoItemsVar).toHaveText("Walk the Dog!");
    }
);

test('Should be able to add multiple search Items.',
     async({page})=> {
        const commonPageLocatorVar = page.locator("#new-todo");
        const displayedToDoItemsVar = page.locator(".todo-list label");
        const strikeOutEleVar = page.locator(".todo-list li",{hasText:"Cat! is sleeping"});
        
        await page.goto('https://todomvc.com/examples/emberjs/');

        await commonPageLocatorVar.fill("Walk the Dog!");
        await commonPageLocatorVar.press("Enter");

        await commonPageLocatorVar.fill("Cat! is sleeping");
        await commonPageLocatorVar.press("Enter");

        await expect(displayedToDoItemsVar).toHaveText(["Walk the Dog!","Cat! is sleeping"]);
        await strikeOutEleVar.locator(".toggle").check();
        await expect(strikeOutEleVar).toHaveClass(/completed/);

     }
);



