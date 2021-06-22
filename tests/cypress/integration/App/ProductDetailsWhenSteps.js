import { When } from "cypress-cucumber-preprocessor/steps"
import ProductDetailsViewDOM from "../../support/dom/ProductCardViewDOM";
import environments from "../../support/environments/config";

When('I go to product {string} card', (product) => {
    cy.visit(Cypress.env('CYPRESS_BASE_URL') + 'detail.html?id=d3588630-ad8e-49df-bbd7-3167f7efb246')
})

When('I add product to cart', () => {
    ProductDetailsViewDOM.content.addToCard()
})