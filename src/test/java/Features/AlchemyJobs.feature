@alchemyJobs
Feature: Activities of Alchemy Job portal

Scenario: Visit the site’s backend and create a new user
    Given User launches the backend URL
    When User Logs In to site's backend
    Then User navigates to Add New User screen
    And Adds all the necessary details and creates new user
    And Verifies the added user
    And Closes the browser


Scenario: Visit the site’s frontend and apply for Job
    Given User launches the frontent URL
    When User navigates to Jobs page
    Then User Searches for a job full time "Test Specialist"
    And Applies for the Job listed
    And Closes the browser
    

Scenario: Visit the site’s frontend and apply for Job
    Given User launches the frontent URL
    When User navigates to Post A job
    Then User logs in to the site
    And Fills job details
    |Test Specialist | IBM SDET Batch 2 Training Test Job| https://alchemy.hguy.co/|Alchemy IBM|Alchemy IBM Testing|
    And User verifies the job posted
    And Closes the browser
    

Scenario Outline: Visit the site’s frontend and apply for Job
    Given User launches the frontent URL
    When User navigates to Post A job
    Then User logs in to the site
    And Fills job details with "<title>", "<description>", "<website>", "<companyName>" and "<companyTagline>"
    And User verifies the job posted
    And Closes the browser
    
Examples:
	|title 			 | description						 |website				   |companyName|companyTagline	   |
    |Test Specialist | IBM SDET Batch 2 Training Test Job| https://alchemy.hguy.co/|Alchemy IBM|Alchemy IBM Testing|