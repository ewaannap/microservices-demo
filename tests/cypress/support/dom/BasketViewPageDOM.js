const Basket = {
    title: 'h1'
}

const BoxFooter = {
     continueShoppingButton: 'div.pull-left',
     orderButton: '#orderButton',
     proceedToCheckout: () => {
        cy.
        get(BoxFooter.orderButton).click()
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