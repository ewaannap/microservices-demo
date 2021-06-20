import { Given } from "cypress-cucumber-preprocessor/steps"
import HomePageViewDOM from "../../support/dom/HomePageViewDOM"



Given('I am on home page', () => {
    cy
    .clearLocalStorage()
    .clearCookies()
    .visit(Cypress.env('CYPRESS_BASE_URL'))
})

Given('I go to login page', () => {
    HomePageViewDOM.topbar.goToLoginPage()
})