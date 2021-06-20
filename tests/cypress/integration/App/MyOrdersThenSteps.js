import { Then } from "cypress-cucumber-preprocessor/steps";

Then('I can see customer orders page', () => {
    cy.get('h1').should('have.text', 'My orders')
})