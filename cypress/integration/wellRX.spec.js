/// <reference types="cypress" />

describe('Automation Test Suite - Fixtures', () => {
  
  
  //Use the cy.fixture() method to pull data from fixture file
  before("Login to application", () => {
    cy.visit('https://www.wellrx.com/');
    cy.fixture("user").as("user");

  })

  it('WellRX Automation login test', () => {    
    
    cy.url().should('eq', 'https://www.wellrx.com/') // => true
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title()

    // Click Login button and validate page
    cy.get('#headerLoginLink').click()
    cy.url().should('eq', 'https://www.wellrx.com/member/login/') // => true
    cy.document().should('have.property', 'charset').and('eq', 'UTF-8')
    cy.title()
    
    cy.get("@user").then((user) => {
      cy.get('#login_submit').should('be.visible').and('be.disabled')
      cy.get('#LoginViewModel_Email').type(user.UserName);
      cy.get('#LoginViewModel_Password').type(user.Password);
      cy.get('#login_submit').should('be.visible').and('not.be.disabled')
      cy.get('#login_submit').click()
    })
    
    // Find drugs in my area
    cy.get('.show-for-large > a').should('be.visible')
    cy.get('.fa-menu').click()
    cy.contains('Price Drugs').click()
    cy.get('#drugSearchInput').clear()
    cy.get('#drugSearchInput').type('Ibuprofen')
    cy.get('#addressSearchBanner').clear().type('80023')
    cy.get('#btnSearchInternal').click()
    cy.get('#more-btn-CVS-PHARMACY > .more-location-link > .more-loc-content').click()
    cy.get('.option-selected > .align-left > .medium-11 > .location-details > .align-justify > .small-4 > .expanded-buttons > .align-center > .secondary').click()

    // Verify Shopping cart
    cy.get('a > .show-for-medium').click()
    cy.get('.drugname-pbasket').should('be.visible').and('not.be.disabled')

    // Clear my basket and validate
    cy.get('.remove-all-item > span > a').click()
    cy.get('.drugname-pbasket').should('not.be.visible')
    cy.get('[class="button rounded yes"]').click()

    // Logout from app
    cy.get('a[title="Log out"]').should('be.visible')
    cy.xpath('//a[contains(text(),"Logout")]').click({force:true})




    // // Verify that all navs are visible in the header section
    // // 1.Zwift icon
    // cy.get('.znv-ghost-d-none > svg')
    //   .should('be.visible')

    // // 2.Get Started  
    // cy.get('.znv-d-lg-flex > div > .znv-py-2_5')
    //   .should('be.visible')

    // // 3.Training
    // cy.get('.znv-d-lg-flex > [href="/training-plans"]')
    //   .should('be.visible')

    // // 4.RUN
    // cy.get('.znv-d-lg-flex > [href="/run"]')
    //   .should('be.visible')

    // // 5.OFF-ROAD
    // cy.get('.znv-d-lg-flex > [href="/offroad"]')
    //   .should('be.visible')

    // // 6.SHOP
    // cy.get('.znv-px-lg-1_5 > .znv-d-lg-flex > [href="/shop"]')
    //   .should('be.visible')

    // // 6.EVENTS
    // cy.get('.znv-d-lg-flex > [href="/events"]')
    //   .should('be.visible')

    // // 7.SUPPORT
    // cy.get('.znv-d-lg-flex > [href="https://support.zwift.com/"]')
    //   .should('be.visible')

    // // Move on to set the region
    // cy.get('#znv-header-lang-dropdown').click()

    // // Let's set region to Europe / Dutch
    // cy.get('#znv-header-lang-de-eu-link > :nth-child(2) > .znv-mb-0_5').click()


    // cy.wait(5500)
    // // Oh. I don't understand that jibbiresh , let's move back to English settings
    // cy.get('#znv-header-lang-dropdown').click()
    // cy.get('#znv-header-lang-en-us-link > :nth-child(2) > .znv-mb-0_5').click()

    // // Let's move down to the next section of the page
    // cy.wait(1000)
    // cy.scrollTo(0, 1600, { duration: 2000 })

    // //Verify H2 elements
    // cy.contains('Your Goals').should('be.visible')
    // cy.contains('on Your Time').should('be.visible')

    // // Verify Paragrafh elements
    // cy.contains('Strengthen your engine with').should('be.visible')
    // cy.contains('1,000+ structured workouts').should('be.visible')
    // cy.contains('made by top coaches.').should('be.visible')

    // // Let's move down another section
    // cy.wait(1000)
    // cy.scrollTo(1600, 2200, { duration: 2000 })

    // cy.wait(1000)
    // cy.scrollTo(2200, 2600, { duration: 2000 })

    // cy.wait(1000)
    // cy.scrollTo(2600, 3400, { duration: 2000 })

    // // Check the Carousel out
    // cy.get('.carousel-control-next-icon').click()
    // cy.wait(1500)
    // cy.get('.carousel-control-next-icon').click()
    // cy.wait(1500)
    // cy.get('.carousel-control-next-icon').click()
    // cy.wait(1500)
    // cy.get('.active > .testimonial-slide > .layout-container > .testimonial-slide-inner > .testimonial-slide-quote')
    //   .should('have.text', '"Zwift has made me a stronger athlete through training intervals, group rides, and races."')
    // cy.get('.carousel-control-next-icon').click()

    // // Scroll to Events section
    // cy.wait(1000)
    // cy.scrollTo(3400, 3900, { duration: 2000 })

    // cy.get(':nth-child(1) > .tile-content').should('be.visible')
    // cy.get(':nth-child(2) > .tile-content').should('be.visible')

    // // Scroll to join the community and train with us section 
    // cy.wait(1000)
    // cy.scrollTo(3900, 4600, { duration: 2000 })

    // // Ok , im sold let's do this let's go ahead and CREATE AN ACCOUNT!
    // cy.contains('Create Account').click()

    // cy.get('#first-name').type('Test')
    // cy.get('#last-name').type('Testerson')
    // cy.get('#email').type('test_testerson@test.nu')
    // cy.get('#password').type('Test1234')
    // cy.get('#eye-icon').click()
    // cy.get('#consent').check().should('be.checked')
    // cy.get('#terms').check().should('be.checked')
    // cy.get('#marketing-consent').check().should('be.checked')

    // I don't wanna submit the Test account :) let's move on
  })

  // it('Validate Events page', () => {

  //   cy.visit('https://zwift.com')

  //   cy.get('.znv-d-lg-flex > [href="/events"]').click()
  //   cy.url().should('eq', 'https://zwift.com/events') // => true
  //   cy.document().should('have.property', 'charset').and('eq', 'UTF-8')

  //   // Accept the cookies in the footer area
  //   cy.get('#truste-consent-button').click()

  // })

  // const intensityMap = {
  //   'A': 1,
  //   'B': 2,
  //   'C': 3,
  //   'D': 4,
  //   'E (Open)': 5
  // }
  //   // The select elements dropdown picker (cycling, A,B,C,D,E Open , Morning,Afternoon, Evening, Night) 
  // const pick = (sport, intensity, startTime) => {

  //   // Let's pick my favo sport Cycling from the Dropdown
  //   cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(sport)
  //   cy.get(':nth-child(1) > .select-wrapper > #filter-location').select(sport).should('have.value', sport)

  //   //  ===== Select Drop down Section ==== //
  //   // I'm a solid A rider so let's select A and get those legs burning
  //   cy.get(':nth-child(2) > .select-wrapper > #filter-location').select(intensity)
  //   cy.get(':nth-child(2) > .select-wrapper > #filter-location').select(intensity).should('have.value', intensityMap[intensity])

  //   // I like to spin in the mornings so let's go ahead and sign up for the Morning races
  //   cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(startTime)
  //   cy.get(':nth-child(3) > .select-wrapper > #filter-location').select(startTime).should('have.value', startTime.toLowerCase())
  // }

  // const selectFirstListing = () => {
  //   // Pick first available spin and call it good
  //   cy.get(':nth-child(2) > .listing-top > .listing-header > span').scrollIntoView().click()

  //   // Validate that NOT tab-listing is empty for workouts
  //   cy.get('.tab-listing').each(listing => {
  //     cy.wrap(listing).find('.header-title').invoke('text').should('not.to.be.empty')
  //   })
  // }

  //   // Negative test will look up events already completed and move on to another category to find a race
  // it('loop through filters and find combination where event series completed', () => {
  //     // The select elements from the dropdown
  //   const loop = (sport, intensity, startTime) => {

  //     pick(sport, intensity, startTime)

  //     cy.get('column').find('.tab-listing').then((tabListings) => {
  //       cy.log('length: ' + tabListings.length)
  //       cy.wrap(tabListings[0]).invoke('text').then(text => {
  //         cy.log('text: ' + text)
  //         if (text === 'Event series completed.') {
  //           cy.log('found 0 listings')
  //           // Screenshot if this message if we see a 0 listing and move on
  //           cy.screenshot()
  //         }
  //         else {

  //           if (intensity === 'A') {
  //             intensity = 'B'
  //           }
  //           else if (intensity === 'B') {
  //             intensity = 'C'
  //           }
  //           else if (intensity === 'C') {
  //             intensity = 'D'
  //           }
  //           else if (intensity === 'D') {
  //             intensity = 'E (Open)'
  //           }
  //           else {
  //             intensity = 'A'
  //             if (startTime === 'Morning') {
  //               startTime = 'Afternoon'
  //             }
  //             if (startTime === 'Afternoon') {
  //               startTime = 'Evening'
  //             }
  //             if (startTime === 'Evening') {
  //               startTime = 'Night'
  //             }
  //             else {
  //               startTime = 'Morning'
  //               if (sport === 'CYCLING') {
  //                 sport = 'RUNNING'
  //               }
  //               else return
  //             }
  //           }
  //           loop(sport, intensity, startTime)
  //         }
  //       })
  //     })

  //   }

  //   loop('CYCLING', 'A', 'Morning')
  // })

  // // Reuse my Const variable , code effiency right
  // it('should click through a listing', () => {

  //   pick('CYCLING', 'A', 'Morning')

  //   selectFirstListing()
  //   // Let's wrap up with a little pic of the race you just got served ( pictures will be located in the left pane under Screenshots)
  //   cy.get('column').scrollIntoView().screenshot()
    
  // })

  // it('Last words to Zwift', () => {

  //   cy.get('.znv-d-lg-flex > [href="https://support.zwift.com/"]').click()

  //   cy.get('#searchInput').type('Hope you liked my test , I\'m pumped to hear back from you :) CYA', { delay: 100 })

  // })

})