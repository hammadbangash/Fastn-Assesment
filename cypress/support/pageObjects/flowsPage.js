
export class flowsPage {
    createClickFlowButton(){
        cy.get("button[id='create-new-widgets']").click();
    }

    enterFlowName(flowName){
        cy.get("input[placeholder='Flow Name']").type(flowName);
    }

    createFlow(){
        cy.get("button:contains('Build')").click();
    }
  }
  
  
  export const flowsTemplate = new flowsPage()