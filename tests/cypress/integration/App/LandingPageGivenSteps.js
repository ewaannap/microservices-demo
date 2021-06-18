import { Given } from "cypress-cucumber-preprocessor/steps"
import LandingPageViewDOM from "../../support/dom/LandingPageViewDOM"



Given('I am on landing page', () => {
    cy.visit('http://0.0.0.0/')
})

Given('I go to login page', () => {
    LandingPageViewDOM.topbar.goToLoginPage()
})