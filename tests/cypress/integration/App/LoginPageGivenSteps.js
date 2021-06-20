import { Given } from "cypress-cucumber-preprocessor/steps"
import CustomerLoginPageViewDom from "../../support/dom/CustomerLoginPageViewDOM"
import environments from "../../support/environments/config"

Given('I log in as a {string}', (user) => {
    const username = environments.test.users.user1.username
    const password = environments.test.users.user1.password

    CustomerLoginPageViewDom.Form.clearInputs()
    cy.get(CustomerLoginPageViewDom.Form.usernameInput).type(username),
    cy.get(CustomerLoginPageViewDom.Form.passwordInput).type(password),
    CustomerLoginPageViewDom.Form.submitLogIn()
})