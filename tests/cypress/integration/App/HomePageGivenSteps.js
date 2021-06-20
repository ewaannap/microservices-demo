import { Given } from "cypress-cucumber-preprocessor/steps"
import HomePageViewDOM from "../../support/dom/HomePageViewDOM"
import environments from "../../support/environments/config"



Given('I am on home page', () => {
    cy.clearLocalStorage()
    cy.clearCookies()
    cy.visit(Cypress.env('CYPRESS_BASE_URL'))
})

Given('I go to login page', () => {
    HomePageViewDOM.topbar.goToLoginPage()
})