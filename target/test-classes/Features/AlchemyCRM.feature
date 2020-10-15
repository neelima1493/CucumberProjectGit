@AlchemyCRM
Feature: Activities of Orange HRM portal


Scenario: Open the homepage and count the number of the dashlets on the page
    Given User launches Alchemy CRM portal
    When User Logs In to CRM site
    Then User Counts and prints the dashlet titles
    And Closes CRM browser


Scenario: To schedule a meeting and include at least 3 invitees
    Given User launches Alchemy CRM portal
    When User Logs In to CRM site
    Then User navigates to Schedule a Meeting
    And User enters all the details
    |firstName14|
    |firstName15|
    |firstName16|
    And User Verifies the created meeting
    And Closes CRM browser
    

Scenario Outline: Open the Leads page and add multiple lead accounts using values passed from Feature file
    Given User launches Alchemy CRM portal
    When User Logs In to CRM site
    Then User navigates to Create Lead screen
    And User creates lead accounts and verifies using "<first>" and "<last>"
    And Closes CRM browser
    
Examples:
 |first		  |last		  |
 |AfirstName49|AlastName49|
 |AfirstName59|AlastName59|
 |AfirstName69|AlastName69|

    

Scenario Outline: To use an Examples table to add products
    Given User launches Alchemy CRM portal
    When User Logs In to CRM site
    Then User navigates to create product
    And User enters all the details using "<prodName>", "<price>" and "<desc>"
    And User Verifies the created product
    And Closes CRM browser
     
Examples:
 |prodName |price|desc						|
 |product19|15   |Product for Cucumber project|
 |product29|15   |Product for Cucumber project|
 |product39|15   |Product for Cucumber project|
