import { Given } from "cypress-cucumber-preprocessor/steps"
import CustomerLoginPageViewDom from "../../support/dom/CustomerLoginPageViewDOM"
import environments from "../../support/environments/config"

Given('I log in as a {string}', (user) => {
    const username = environments.test.users.user1.username
    const password = 'password'
    cy.get(CustomerLoginPageViewDom.Form.usernameInput).clear(),
    cy.get(CustomerLoginPageViewDom.Form.passwordInput).clear(),
    cy.get(CustomerLoginPageViewDom.Form.usernameInput).type(username),
    cy.get(CustomerLoginPageViewDom.Form.passwordInput).type(password),
    CustomerLoginPageViewDom.Form.submitLogIn()
})