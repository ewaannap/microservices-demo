
const topbar = {
  selector: '#top',  
  loginSelector: '#top #login',
  registerSelector: '#top #register',
  goToLoginPage: () => {
      cy.get(topbar.loginSelector).click()
  },
  basketOverview: 'a.btn.btn-primary.navbar-btn i.fa.fa-shopping-cart',
  goToCart: () => {
    cy.get(topbar.basketOverview).click()
  }

}


const HomePageViewDOM = {
    topbar
}

export default HomePageViewDOM