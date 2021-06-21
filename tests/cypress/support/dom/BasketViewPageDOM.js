const Basket = {
    title: 'h1'
}

const BoxFooter = {
     continueShoppingButton: 'div.pull-left',
     orderButton: '#orderButton:not([disabled])',
     proceedToCheckout: () => {
        cy.get(BoxFooter.orderButton)
        .click( {force: true} )
     },
     errorMessageSelector: 'div.alert.alert-danger.alert-dismissible',
     getErrorMessageSelector: () => {
         return cy.get(BoxFooter.errorMessageSelector)
        }
    }

const BasketViewPageDOM = {

    BoxFooter
    // BoxShippingAdress,
    // BoxPayment,
    // BoxCouponCode,
    // BoxOrderSummary
}

export default BasketViewPageDOM