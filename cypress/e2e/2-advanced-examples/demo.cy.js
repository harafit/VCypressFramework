//https://demoqa.com/automation-practice-form


describe('Implicit Assertions', () => {
    it('.should() - make an assertion about the current subject', () => {
      
        cy.visit("https://testautomationpractice.blogspot.com/")

        cy.get('#male').should('be.visible')
        cy.get('#female').should('be.visible')

  //selecting radio buttons
  cy.get("#male").check().should('be.checked')
  cy.get("#female").should('not.be.checked')

  cy.get("#female").check().should('be.checked')
  cy.get("#male").should('not.be.checked')

    })
  })
