import { When } from "cypress-cucumber-preprocessor/steps";
import HomePageViewDOM from "../../support/dom/HomePageViewDOM";

When('I go to basket', () => {
    HomePageViewDOM.topbar.goToCart()
})
