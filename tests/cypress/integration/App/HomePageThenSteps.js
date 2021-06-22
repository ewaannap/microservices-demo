import { Then } from "cypress-cucumber-preprocessor/steps";
import HomePageViewDOM from "../../support/dom/HomePageViewDOM";

// Then('I can see {string} item(s) in cart', (numberOfItems) => {
//     HomePageViewDOM.topbar.getNumberOfItems.to.equal(numberOfItems)
// })

Then('I can see {string} item(s) in cart', numberOfItems => {
    HomePageViewDOM.topbar.getNumberOfItems.to.equal(numberOfItems)

})
