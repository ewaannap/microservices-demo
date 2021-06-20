const Basket = {
    title: 'h1'
}

const BoxFooter = {
     continueShoppingButton: 'div.pull-left',
     orderButton: '#orderButton',
     proceedToCheckout: () => {
        cy.get(BoxFooter.orderButton).click()
     }
}

// const BoxShippingAdress = {

// }

// const BoxPayment = {

// }

// const BoxCouponCode = {


// },

// const BoxOrderSummary = { 

// }

const BasketViewPageDOM = {

    BoxFooter
    // BoxShippingAdress,
    // BoxPayment,
    // BoxCouponCode,
    // BoxOrderSummary
}

export default BasketViewPageDOM