/// <reference types="cypress" />

describe('Automation Test Suite - Fixtures', () => {
 
  //Use the cy.fixture() method to pull data from fixture file
  before(function () {
    cy.fixture('chrono').then(function (data) {
      this.data = data;
    })
  })
 
  it('Cypress Test Case - Login to app', function () {
 
    //Provide the data read from the fixture
    cy.visit('https://admin-qa.chronotrack.com/auth/sign-in-form');
    cy.get('#soclog-bz-login-email').type(this.data.UserName);
    cy.get('#soclog-bz-login-password').type(this.data.Password)
 
    //Checking if checkbox is checked or not
    cy.get('input[class="remember-me"]').should('be.checked');
    
 
    //Forgot password link visible 
    cy.get('.bz-login-links > [href="/user/profile/forgot-password"]').should('be.visible');
    
    //Create new account link visible
    cy.get('[href="/user/profile/create-account"]').should('be.visible');

 
    //Click the login button 
    cy.get('#sign_in').click()
  })
})