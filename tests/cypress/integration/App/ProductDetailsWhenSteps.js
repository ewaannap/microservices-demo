import { When } from "cypress-cucumber-preprocessor/steps"
import ProductDetailsViewDOM from "../../support/dom/ProductCardViewDOM";
import environments from "../../support/environments/config";

When('I go to product {string} card', (product) => {
    // cy.intercept('/cart').as('getCart')
    // cy.wait('@getCart')
    cy.visit({
        url: '0.0.0.0/detail.html?id=d3588630-ad8e-49df-bbd7-3167f7efb246',
        method: 'GET',
        
    })

})

When('I add product to cart', () => {
    ProductDetailsViewDOM.content.addToCard()
})