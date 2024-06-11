describe('Capture Screenshots and Videos',()=>{

it('Screenshot',()=>{

    cy.visit('https://demo.opencart.com/')
  //  cy.screenshot('HomePageScreenshot')

  //  cy.get('img[title="Your Store"]').screenshot('LogoScreenshot')

  cy.wait(5000)
  cy.get(':nth-child(6) > .nav-link').click()

  cy.get('h2').should('have.text','Cameras')

})

})