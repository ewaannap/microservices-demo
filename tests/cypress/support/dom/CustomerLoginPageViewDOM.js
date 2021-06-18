const Form = {
    usernameInput: 'input#username-modal',
    passwordInput: 'input#password-modal',
    errorSelector: '#login-message',
    getErrorMessage: () => {
        return cy.get(Form.errorSelector)
    }
}