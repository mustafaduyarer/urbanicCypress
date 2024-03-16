/// <reference types="cypress" />
import { registerPage} from "../../pages/RegisterPage";
import data from "../../fixtures/data.json";


describe('User should able to register successfully', () => {
    it('Register', () => {
        cy.visit("https://test.urbanicfarm.com/")
        registerPage.registerButton_click()
        registerPage.register(
            data.firstName,
            data.lastName,
            data.email,
            data.password,
            data.confirmPassword,
            data.zipCode,
           
            
        )
        registerPage.submitRegister_click()

        
    });
});
