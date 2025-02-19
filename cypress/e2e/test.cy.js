import {loginTemplate} from '../support/pageObjects/loginPage.js'
import {dashboardTemplate} from '../support/pageObjects/dashboardPage.js'
import {flowsTemplate} from '../support/pageObjects/flowsPage.js'
import {flowsDetailTemplate} from '../support/pageObjects/flowDetailsPage.js'


describe('Fastn.ai', () => {
  before(() => {
    loginTemplate.visitWebsite();
    });


  it('Login to FASTN.AI', () => {
   loginTemplate.loginFastn();
   cy.url().should('include',"https://live.fastn.ai/app");
  });


  it('Select Flows', () => {
    dashboardTemplate.navigateDashboard();

    dashboardTemplate.openSidebar();
    dashboardTemplate.openFlows();
    cy.url().should('include.text', "https://live.fastn.ai/app/projects/16d94bb6-78b4-4bd2-91b5-22db99af946e/api");
   });

   it('Create new Flow', () =>{
     flowsTemplate.createClickFlowButton();
     flowsTemplate.enterFlowName("FLOW-1");
     flowsTemplate.createFlow();

   })

   it('Add New Connector and Make it live', ()=>{
        flowsDetailTemplate.clickAddConnectorButton();
        flowsDetailTemplate.selectConnectorOption();
        
        flowsDetailTemplate.selectShopifyConnector();
        flowsDetailTemplate.selectEndpoint();

        flowsDetailTemplate.clickNext();
        flowsDetailTemplate.clickNext();

        flowsDetailTemplate.enterLimit();
        flowsDetailTemplate.clickSave();

        flowsDetailTemplate.clickDeployProduction();
   })
});