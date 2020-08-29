/// <reference types="cypress" />

describe('delta_tasks', () => {
  Cypress.config('defaultCommandTimeout', 15000)
  beforeEach(() => {
    cy.visit('https://www.usconcealedcarry.com/')
  })

  before("user", () => {
    cy.fixture("delta").as("user");

  })

  it.skip('A00001 should Create a New (Free) User Account', () => {

    //Creation of a New (Free) User Account

    cy.get("@user").then((user) => {
      cy.get('.uscca-header__desktop-login').click()
      cy.get('#signUpTodayButton').click()
      cy.get('#createAccountFirstName').type(user.FirstName)
      cy.get('#createAccountLastName').type(user.LastName)
      cy.get('#createAccountEmail').type(user.Email)
      cy.get('#createAccountPassword').type(user.PassWord1)
      cy.get('#createAccountReEnterPassword').type(user.PassWord1)
      cy.get('#createAccountSignUpButton').click()

    })
  })

  it.skip('A00002 should Change the Account Password (After The Account is Created)', () => {
    //After The Account is Created, Change the Account Password
    context("user", () => {
      cy.fixture("delta").as("user");

    })
    cy.get("@user").then((user) => {
      cy.get('.uscca-header__desktop-login').click()
      cy.get('#signinEmail').type(user.Email)
      cy.get('#continueButton').click()
      cy.get('#signinPassword').type(user.Password)
      cy.get('#signInSignInButton').click()

      cy.get('#accountDetailsNav').click()
      cy.get('#contactInformation').click()
      cy.contains('Password').should('be.visible')
      cy.get('#passwordEdit').click()
      cy.get('#password-information-password').type(user.Password2)
      cy.get('#password-information-confirm-password').type(user.Password2)
      cy.get('#passwordSave').click()
      cy.get('#nav-link_account-dropdown').click()
      cy.get('.uscca-user-flyout > :nth-child(2) > a').click()

    })
  })

  it.skip('A00003 should Log Out and Log Back In as the New User that was Created', () => {
    //Log Out, Log Back In as the New User that was Created
    context("user", () => {
      cy.fixture("delta").as("user");

    })
    //When Logged Back in, Navigate around to a few of the Dashboard Items
    cy.get("@user").then((user) => {
      cy.get('.uscca-header__desktop-login').click()
      cy.get('#signinEmail').type(user.Email)
      cy.get('#continueButton').click()
      cy.get('#signinPassword').type(user.Password2)
      cy.get('#signInSignInButton').click()
      cy.get('div.mb-3 > .d-none > .row > :nth-child(1) > p').should('have.text', `6 Things You Didn't Know Would Happen When The Police Arrive...`)
      cy.get('div.mb-3 > .d-none > .row > :nth-child(2) > p').should('have.text', 'Concealed Carry Guide').scrollIntoView()
      cy.get('div.mb-3 > .d-none > .row > :nth-child(3) > p').should('have.text', 'Concealed Carry Map: Know Your Rights')
      cy.get('.footer__top').scrollIntoView()
      cy.wait(2000)
      cy.get('.dashboard__h1--page-title').scrollIntoView()

      
    })
  })

  it('A00004 should Validate perform on User contact info, as part of the Navigation Scenario', () => {
     //As part of the Navigation Scenario, perform validations on User contact info
     context("user", () => {
      cy.fixture("delta").as("user");

    })
    //When Logged Back in, Navigate around to a few of the Dashboard Items
    cy.get("@user").then((user) => {
      cy.get('.uscca-header__desktop-login').click()
      cy.get('#signinEmail').type(user.Email)
      cy.get('#continueButton').click()
      cy.get('#signinPassword').type(user.Password2)
      cy.get('#signInSignInButton').click()
      cy.get('#accountDetailsNav').click()
      cy.get('#contactInformation').click()

      // Valitdate contact info
      cy.get('#personal-information > .row > .col-sm-9 > .info > :nth-child(1)').should('have.text', 'Name: Joe Johnson')
      cy.get('#email-information > .row > .col-sm-9 > .info > .p').should('have.text', 'freddan1980@hotmail.com')
      
    })
   })

  // it('A00005 should Grab information in the Education and Training section of the Dashboard to build a report', () => {
  //   //Test - Navigate to the Education and Training section of the Dashboard & grab
  //   //information on the page
  //   //in order to build a report of the available videos. Build an array of the data.
  // })

  // it('A00007 should Search 7 Reasons to Join and Show the top 3 of the 7 reasons on the blog mentioned.', () => {
  //   //Use the Search Functionality on the Dashboard (magnification icon). Look for "7 Reasons
  //   //to Join" and
  //   //click on the first result. Ensure you can see the top 3 of the 7 reasons on the blog
  //   //mentioned.
  // })

  // it('A00008 should Print out the array of the data and Build a CSV', () => {
  //   //Print out the array of the data collected in step 6 to build a CSV. We sometimes generate
  //   //data that is
  //   //used as a quick report to give to other department leads.
  // })

  // //

})
