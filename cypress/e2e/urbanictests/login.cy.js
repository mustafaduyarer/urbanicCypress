import LoginPage from "../../pages/LoginPage";

describe('Verify user can login Urbanic Farm', () => {
    it('Verify user is able to login successfully', () => {
        cy.visit(Cypress.env('loginURL'))
        LoginPage.loginUrbanic()

        
    });
});