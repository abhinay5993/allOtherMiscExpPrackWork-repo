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

test('The Todo input field Should display a helpfull prompt.',
    async ({ page }) => {
        await expect(page.locator("#new-todo")).toHaveAttribute('placeholder', 'What needs to be done?');
    }
);


test.describe('When adding a single Item.',
    async () => {

        test.beforeEach(
            async ({ page }) => {
                await commonPageLocatorVar.fill("Walk the Dog!");
                await commonPageLocatorVar.press("Enter");
            }
        );

        test('Should add item to the list.',
            async ({ page }) => {
                await expect(displayedToDoItemsVar).toHaveText("Walk the Dog!");
            }
        );

        test('Should show number of remaining items.',
            async ({ page }) => {
                await expect(page.locator("#todo-count")).toHaveText("1 item left");
            }
        );
    }
);


test.describe('When adding a multiple Items.',
    async () => {

        test.beforeEach(
            async ({ page }) => {
                await commonPageLocatorVar.fill("Walk the Dog!");
                await commonPageLocatorVar.press("Enter");
                await commonPageLocatorVar.fill("Cat! is sleeping");
                await commonPageLocatorVar.press("Enter");
            }
        );

        test('Should add item to the list.',
            async ({ page }) => {
                await expect(displayedToDoItemsVar).toHaveText(["Walk the Dog!", "Cat! is sleeping"]);
            }
        );

        test('Should show number of remaining items.',
            async ({ page }) => {
                await expect(page.locator("#todo-count")).toHaveText("2 items left");
            }
        );
    }
);
