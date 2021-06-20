const Form = {
    usernameInput: 'input#username-modal',
    passwordInput: 'input#password-modal',
    errorSelector: '#login-message',
    getErrorMessage: () => {
        return cy.get(Form.errorSelector)
    },
    logInButton: 'button[onclick="return login()"]',
    submitLogIn: () => {
        cy.get(Form.logInButton).click()
    }
    
}

const CustomerLoginPageViewDom = {
    Form
}

export default CustomerLoginPageViewDom