import { When } from "cypress-cucumber-preprocessor/steps"
import BasketViewPageDOM from "../../support/dom/BasketViewPageDOM";

When('I proceed to checkout', () => {
    BasketViewPageDOM.BoxFooter.proceedToCheckout()
})