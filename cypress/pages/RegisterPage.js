
class RegisterPage {
  elements = {
    register_button: () => cy.get("[class='Navbar_textLink__f6_Al mr-2']"),
    firstName_textBox: () => cy.get("#registration_form_firstname"),
    lastName_textBox: () => cy.get("#registration_form_lastname"),
    email_textBox: () => cy.get("#registration_form_email"),
    password_textBox: () => cy.get("#registration_form_plainPassword"),
    confirmPassword_textBox: () => cy.get("#registration_form_confirmPassword"),
    zipCode_textBox: () => cy.get("[name='zipCode']"),
    submitButton: () => cy.get("[type='submit']"),
  };
  registerButton_click(){
    this.elements.register_button().click()
  }
  submitRegister_click(){
    this.elements.submitButton().click()
  }
  register(
    firstName,
    lastName,
    email,
    password,
    confirmPassword,
    zipCode,
   
  ) {
   
   
    this.elements.firstName_textBox().type(firstName, { force: true });
    this.elements.lastName_textBox().type(lastName, { force: true });
    this.elements.email_textBox().type(email, { force: true });
    this.elements.password_textBox().type(password, { force: true });
    this.elements.confirmPassword_textBox().type(confirmPassword);
    this.elements.zipCode_textBox().type(zipCode);
    // this.elements.submitButton().click();
  }
}
export const registerPage = new RegisterPage();
