import { Then } from "cypress-cucumber-preprocessor/steps";
import BasketViewPageDOM from "../../support/dom/BasketViewPageDOM";
import HomePageViewDOM from "../../support/dom/HomePageViewDOM";

Then('I can see {string} error', (error) => {
    BasketViewPageDOM.BoxFooter.getErrorMessageSelector()
    .should('include.text', error)
})

Then('I can see {string} item(s) in cart', (numberOfItems) => {
    HomePageViewDOM.topbar.getNumberOfItems.to.equal(numberOfItems)
})