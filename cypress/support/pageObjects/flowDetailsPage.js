
export class flowsDetails {
    clickAddConnectorButton(){
        cy.get("button[id='addFirstNode']").click();
    }

    selectConnectorOption(){
        cy.get("connector[id='Connector']").click();
    }

    selectShopifyConnector(){
        cy.get("span:contains('Select a connector')").click();
        cy.get("input[placeholder='Search a connector']").type("Shopify");
        cy.get("span:contains('Shopify')").click();
    }

    
    selectEndpoint(){
        cy.get("span:contains('Select an endpoint')").click();
        cy.get("input[placeholder='Search endpoints...']").type("getProducts");
        cy.get("span:contains('getProducts')").first().click();
    }

    clickNext(){
        cy.get("button[id='next']").click();
    }

    enterLimit(){
        cy.get("span:contains('Field value')").eq(1).type('2');
    }

    clickSave(){
        cy.get("button[id='save']").click();
    }
    
    clickDeployProduction(){
        cy.get("button[id='deploy-button']").click();
    }
  }
  
  
  export const flowsDetailTemplate = new flowsDetails()