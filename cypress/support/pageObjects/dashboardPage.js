
export class dashboardPage {
  navigateDashboard(){
    cy.visit("https://live.fastn.ai/app/projects/16d94bb6-78b4-4bd2-91b5-22db99af946e/getStarted");

    Cypress.on('uncaught:exception', (err, runnable) => {        
        return false
    });
  }

  openSidebar(){
    cy.get("span:contains('Open sidebar')").click();
  }

  openFlows(){
    cy.get("a[id='apis']").click();
  }
}


export const dashboardTemplate = new dashboardPage()