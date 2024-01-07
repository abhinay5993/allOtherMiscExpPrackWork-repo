import { test, expect } from "@playwright/test";
import { TodoFormsPage } from "./pageObjects/TodoFormsPage";
import { ToDoListPage } from "./pageObjects/ToDoListPage";
import { NavigationPage } from "./pageObjects/NavigationPage";

let todoFrmPg;
let toDoListPg;
let navigatePg;
test.beforeEach('This will run beforeEach test',
    async ({ page }) => {
        todoFrmPg=new TodoFormsPage(page);
        toDoListPg=new ToDoListPage(page);
        navigatePg=new NavigationPage(page);
        await navigatePg.pageNavigateTo('https://todomvc.com/examples/emberjs/');
    }
);

test('The Todo input field Should display a helpfull prompt.',
    async ({ page }) => {
        await expect(todoFrmPg.commonPageLocatorVar).toHaveAttribute('placeholder', 'What needs to be done?');
    }
);


test.describe('When adding a single Item.',
    async () => {

        test.beforeEach(
            async ({ page }) => {
                await todoFrmPg.enterInputTextToField("Walk the Dog!");
            }
        );

        test('Should add item to the list.',
            async ({ page }) => {
                await expect(toDoListPg.displayedToDoItemsVar).toHaveText("Walk the Dog!");
            }
        );

        test('Should show number of remaining items.',
            async ({ page }) => {
                await expect(toDoListPg.remNoOfItems).toHaveText("1 item left");
            }
        );
    }
);


test.describe('When adding a multiple Items.',
    async () => {

        test.beforeEach(
            async ({ page }) => {
                await todoFrmPg.enterInputTextToField("Walk the Dog!");
                await todoFrmPg.enterInputTextToField("Cat! is sleeping");
            }
        );

        test('Should add item to the list.',
            async ({ page }) => {
                await expect(toDoListPg.displayedToDoItemsVar).toHaveText(["Walk the Dog!", "Cat! is sleeping"]);
            }
        );

        test('Should show number of remaining items.',
            async ({ page }) => {
                await expect(toDoListPg.remNoOfItems).toHaveText("2 items left");
            }
        );
    }
);
