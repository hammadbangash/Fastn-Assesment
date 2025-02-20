# FASTN

## Introduction
This project automates a user journey in Fastn, focusing on creating and testing a flow. 

The following steps are automated:

1.User logs in to Fastn

2.User navigates to Flows

3.User initiates a new flow

4.User enters a flow name

5.User is redirected to the flow canvas

6.User drags and drops a connector step

7.User selects Shopify | Get Products

8.User enters store details: Store Name and API Key

9.User enters a product limit

10. User deploys flow to production

## Installations

You need to have Node.js installed before using Cypress.

For rest of the installations move to project folder in command prompt and type

`npm install`

which will install Cypress and other supporting tools

## To run the tests

Once installations are done open up the terminal and run the following command to execute the test in headless mode

'npx cypress run'

To open up the cypress test runner run the following command

'npx cypress open'

Once the test runner opens up, choose e2e testing and select a browser to run the tests. Once you see the spec file 'test.cy.js' simple click on the file to start live test execution on the cypress test runner
