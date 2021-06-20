import { Then } from "cypress-cucumber-preprocessor/steps";
import BasketViewPageDOM from "../../support/dom/BasketViewPageDOM";

Then('I can see {string} error', (error) => {
    BasketViewPageDOM.BoxFooter.getErrorMessageSelector()
    .should('include.text', error)
})