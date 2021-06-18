
const topbar = {
  selector: '#top',  
  loginSelector: '#top #login',
  registerSelector: '#top #register',
  goToLoginPage: () => {
      cy.get(topbar.loginSelector).click()
  }
}

const LandingPageViewDOM = {
    topbar
}

export default LandingPageViewDOM