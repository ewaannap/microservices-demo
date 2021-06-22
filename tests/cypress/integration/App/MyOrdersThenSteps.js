import { Then } from "cypress-cucumber-preprocessor/steps";

Then('I can see customer orders page', () => {
    cy.get('h1').should('have.text', 'My orders'),
    cy.url().should('include', '/customer-orders')
})

// Then('The request with {string} is sent', () => {
//     cy.intercept('GET', '/cart').as('create-order')
//     cy.wait('@create-order').should('have.property', 'response.statusCode', 200)
// })