
Feature: Login

  Scenario: login without email and password
    Given I have open the app webdriverio page
    When I click on log in, I do not add any data and I click on LOGIN
    Then should show the error

