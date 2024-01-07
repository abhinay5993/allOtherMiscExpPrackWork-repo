import { test, expect } from "@playwright/test";

let commonPageLocatorVar;
let displayedToDoItemsVar;

test.beforeEach('This will run beforeEach test',
    async ({ page }) => {
        await page.goto('https://todomvc.com/examples/emberjs/');
        commonPageLocatorVar = page.locator("#new-todo");
        displayedToDoItemsVar = page.locator(".todo-list label");
    }
);

test.describe('When completing an Items',
    async () => {

        let strikeOutEleVar;
        
        test.beforeEach('This will run beforeEach test',
            async ({ page }) => {
                await commonPageLocatorVar.fill("Walk the Dog!");
                await commonPageLocatorVar.press("Enter");
                await commonPageLocatorVar.fill("Cat! is sleeping");
                await commonPageLocatorVar.press("Enter");

                strikeOutEleVar = page.locator(".todo-list li", { hasText: "Cat! is sleeping" });
                await strikeOutEleVar.locator(".toggle").check();

            }
        );

        test('Should be the completed Items.',
            async ({ page }) => {
                await expect(strikeOutEleVar).toHaveClass(/completed/);
            }
        );

        test('Should update the remaining items count.',
            async ({ page }) => {
                await expect(page.locator("#todo-count")).toHaveText("1 item left");
            }
        );

    }
);
