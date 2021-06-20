const content = {
    addToCartButton: 'a#buttonCart',
    addToWishlistButton: 'a.btn.btn-default i.fa.fa-heart',
    price: 'p#price',
    addToCard: () => {
        cy.get(content.addToCartButton).click()
    }
}

const ProductDetailsViewDOM = {
    content
}

export default ProductDetailsViewDOM