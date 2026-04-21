Feature: Login

  Scenario: Successful login
    Given I open the login page
    When I enter username and password
    Then I should be logged in
