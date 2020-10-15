@OrangeHRM
Feature: Activities of Orange HRM portal


Scenario: To create a job vacancy for “DevOps Engineer”
    Given User launches OrangeHRM
    When User Logs In to site
    Then User navigates to Vacancies
    And Adds vacancy to the portal
    And Verifies the added vacancy
    And Closes Orange HRM browser
    

Scenario: Add information about a candidate for recruitment
    Given User launches OrangeHRM
    When User Logs In to site
    Then User navigates to Add Candidate
    And Adds Candidate to the portal
    And Verifies the added candidate
    And Closes Orange HRM browser
    

Scenario Outline: Add multiple employees using an the Examples table
    Given User launches OrangeHRM
    When User Logs In to site
    Then User navigates to Employee List
    And Adds employees using "<first>", "<last>" and "<password>"
    And Verifies the added employee
    And Closes Orange HRM browser
    
Examples:
 |first		  |last		  |password|
 |AfirstName12|AlastName12|password|
 |AfirstName22|AlastName22|password|
 |AfirstName32|AlastName32|password|


Scenario Outline: Creating multiple vacancies using data from an Examples table
    Given User launches OrangeHRM
    When User Logs In to site
    Then User navigates to Vacancies
    And Adds vacancy to the portal using "<title>", "<vacancyName>" and "<HireManager>"
    And Verifies the added vacancy
    And Closes Orange HRM browser
     
 Examples:
 |title					  |vacancyName				    |HireManager  |
 |Android Developer		  |Android Developer Proj	    |Test Employee|
 |DevOps Engineer		  |DevOps Engineer Proj		    |Test Employee|
 |Java Developer		  |Java Developer Proj		    |Test Employee|