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
    cy.url().should('include.text', "/api");
   });

   it('Create new Flow', () =>{

     var flowName = "flow"+Math.floor(Math.random() * 100);

     flowsTemplate.createClickFlowButton();
     flowsTemplate.enterFlowName(flowName);
     flowsTemplate.createFlow();

     cy.url().should('include.text', flowName);
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