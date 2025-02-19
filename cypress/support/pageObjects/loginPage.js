
export class loginPage {
  
    visitWebsite(){
        cy.visit("https://live.fastn.ai/auth/realms/fastn/protocol/openid-connect/auth?client_id=fastn-app&redirect_uri=https%3A%2F%2Flive.fastn.ai%2Fapp%2Flogin%3Freturn_to%3D%252Fapp&response_type=code&scope=openid&state=137010f1d5c74d4c90c49e863d29ab15&code_challenge=ByjcLLw2mONvi2MV-Zp_rbzKHet1RiIbIH63hMvGvtI&code_challenge_method=S256&response_mode=query")
        
        Cypress.on('uncaught:exception', (err, runnable) => {        
        return false
        })
    }

    loginFastn(){
        cy.get("input[id='username']").type('hammadbangash.1@gmail.com');
        cy.get("input[id='password']").type('FASTN123456');
        cy.get("input[id='kc-login']").click(); 
    }



}


export const loginTemplate = new loginPage()