// <reference types="cypress" />

context('Actions', () => {
  beforeEach(() => {
    cy.visit('https://zwift.com')
  })

  it('A little rundown of the zwift homepage', () => {
    // https://on.cypress.io/type
    cy.url().should('eq', 'https://zwift.com/') // => true
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title()
    
    // Accept the cookies in the footer area
    cy.get('#truste-consent-button').click()

    // Verify text in the header area
    cy.get('.sw-alert-banner__content > p').should('have.text', 'Virtual Tour de France: Be A Part of Cycling History LEARN MORE')

    // Move on and find the X selector to remove the header
    cy.get('.fa').click()

    // I'm curious to Explore little bit more what this APP can do before I create an Account, let's head over to Explore Zwift and verify the button and the text element
    cy.get('[href="#welcome-to-zwift"] > .btn')
      .should('have.text', 'Explore Zwift')
      .click()

    // Verify that all navs are visible in the header section
    // 1.Zwift icon
    cy.get('.znv-ghost-d-none > svg')
      .should('be.visible')
    
    // 2.Get Started  
    cy.get('.znv-d-lg-flex > div > .znv-py-2_5')
      .should('be.visible')

    // 3.Training
    cy.get('.znv-d-lg-flex > [href="/training-plans"]')
      .should('be.visible')

    // 4.RUN
    cy.get('.znv-d-lg-flex > [href="/run"]')
      .should('be.visible')

    // 5.OFF-ROAD
    cy.get('.znv-d-lg-flex > [href="/offroad"]')
      .should('be.visible')

    // 6.SHOP
    cy.get('.znv-px-lg-1_5 > .znv-d-lg-flex > [href="/shop"]')
      .should('be.visible')
    
    // 6.EVENTS
    cy.get('.znv-d-lg-flex > [href="/events"]')
      .should('be.visible')
    
    // 7.SUPPORT
    cy.get('.znv-d-lg-flex > [href="https://support.zwift.com/"]')
      .should('be.visible')

    // Move on to set the region
    cy.get('#znv-header-lang-dropdown').click()

    // Let's set region to Europe / Dutch
    cy.get('#znv-header-lang-de-eu-link > :nth-child(2) > .znv-mb-0_5').click()


    cy.wait(5500)
    // Oh. I don't understand that jibbiresh , let's move back to English settings
    cy.get('#znv-header-lang-dropdown').click()
    cy.get('#znv-header-lang-en-us-link > :nth-child(2) > .znv-mb-0_5').click()
    
    // Let's move down to the next section of the page
    cy.wait(1000)
    cy.scrollTo(0, 1600, { duration: 2000 }) 

    //Verify H2 elements
    cy.contains('Your Goals').should('be.visible')
    cy.contains('on Your Time').should('be.visible')

    // Verify Paragrafh elements
    cy.contains('Strengthen your engine with').should('be.visible')
    cy.contains('1,000+ structured workouts').should('be.visible')
    cy.contains('made by top coaches.').should('be.visible')

    // Let's move down another section
    cy.wait(1000)
    cy.scrollTo(1600, 2200, { duration: 2000 })

    cy.wait(1000)
    cy.scrollTo(2200, 2600, { duration: 2000 })

    cy.wait(1000)
    cy.scrollTo(2600, 3400, { duration: 2000 })

    // Check the Carousel out
    cy.get('.carousel-control-next-icon').click()
    cy.wait(1500)
    cy.get('.carousel-control-next-icon').click()
    cy.wait(1500)
    cy.get('.carousel-control-next-icon').click()
    cy.wait(1500)
    cy.get('.active > .testimonial-slide > .layout-container > .testimonial-slide-inner > .testimonial-slide-quote')
      .should('have.text', '"Zwift has made me a stronger athlete through training intervals, group rides, and races."')
    cy.get('.carousel-control-next-icon').click()

    // Scroll to Events section
    cy.wait(1000)
    cy.scrollTo(3400, 3900, { duration: 2000 })

    cy.get(':nth-child(1) > .tile-content').should('be.visible')
    cy.get(':nth-child(2) > .tile-content').should('be.visible')

    // Scroll to join the community and train with us section 
    cy.wait(1000)
    cy.scrollTo(3900, 4600, { duration: 2000 })

    // Ok , im sold let's do this let's go ahead and CREATE AN ACCOUNT!
    cy.contains('Create Account').click()

    cy.get('#first-name').type('Test')
    cy.get('#last-name').type('Testerson')
    cy.get('#email').type('test_testerson@test.nu')
    cy.get('#password').type('Test1234')
    cy.get('#eye-icon').click()
    cy.get('#consent').check().should('be.checked')
    cy.get('#terms').check().should('be.checked')
    cy.get('#marketing-consent').check().should('be.checked')

    // I don't wanna submit the Test account :) let's move on
  })

  it('Validate Events page', () => {
    
    cy.get('.znv-d-lg-flex > [href="/events"]').click()
    cy.url().should('eq', 'https://zwift.com/events') // => true
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

    // Accept the cookies in the footer area
    cy.get('#truste-consent-button').click()

    // Let's pick my favo sport Cycling from the Dropdown
    cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('CYCLING')
    cy.get(':nth-child(1) > .select-wrapper > #filter-location').select('CYCLING').should('have.value', 'CYCLING')    
    

    // I'm a solid A rider so let's select A and get those legs burning
    cy.get(':nth-child(2) > .select-wrapper > #filter-location').select('A')
    cy.get(':nth-child(2) > .select-wrapper > #filter-location').select('A').should('have.value', '1')

    // I like to spin in the mornings so let's go ahead and sign up for the Morning races
    cy.get(':nth-child(3) > .select-wrapper > #filter-location').select('Morning')
    cy.get(':nth-child(3) > .select-wrapper > #filter-location').select('Morning').should('have.value', 'morning')

    // Pick first available spin and call it good
    cy.get(':nth-child(2) > .listing-top > .listing-header > span').scrollIntoView().click()
  })


})