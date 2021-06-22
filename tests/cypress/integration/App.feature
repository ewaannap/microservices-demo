Feature: Socks shop 

Scenario: As unlogged user I can't proceed to checkout without log in to app

    Given I am on home page
    When I go to product "Holy" card
    And I add product to cart
    And I go to basket
    And I proceed to checkout
    Then I can see "Could not place order. Missing shipping or payment information." error


Scenario: As logged user I can can proceed to checkout

    Given I am on home page
    And I go to login page
    And I log in as a user1
    When I go to product "Holy" card
    And I add product to cart
    And I go to basket
    And I proceed to checkout
    Then I can see customer orders page






