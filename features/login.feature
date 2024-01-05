
Feature: Login

  Scenario: 1-login without email & password with Page Object Model
    Given I am in the Home Page
    When I do not add email & password, I click in LOGIN
    Then should show the message of the error

  Scenario: 2-login without email & password
    Given I have open the app webdriverio in Home Page
    When I do not add data & I click on LOGIN
    Then should show the error
