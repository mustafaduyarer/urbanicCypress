class loginPage {
  emailTextBox = () => cy.get('[name="email"]');
  passwordTextBox = () => cy.get('[name="password"]');
  loginButton = () => cy.get('[type="submit"]');
  loginHeader = () => cy.xpath('//a[text()="Login"]');
  registerButton = () =>  cy.xpath('//a[text()="Register"]');
  forgotPasswordButton = () => cy.xpath('//span[text()="Forgot Password"]')


  loginUrbanic(){

    this.forgotPasswordButton().should('be.visible')
    this.registerButton().should('be.visible')
    this.emailTextBox().should('be.visible').type(Cypress.env('email'))
    this.passwordTextBox().should('be.visible').type(Cypress.env('password'))
    this.loginButton().should('be.visible').click()
  }
  





}
export default new loginPage()