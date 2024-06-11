describe('template spec1', function() {
  it('Pass1', function() {
    cy.visit('https://example.cypress.io')

    cy.title().should('eq','Cypress.io: Kitchen Sin')
  })

  it('Pass1', function() {
    cy.visit('https://example.cypress.io')
  })

  it('Pass1', function() {
    cy.visit('https://example.cypress.io')
  })

  it('Pass1', function() {
    cy.visit('https://example.cypress.io')
  })

})

describe('template spec2', () => {
  it('Pass2', () => {
    cy.visit('https://example.cypress.io')
  })
})

describe('template spec3', () => {
  it('Pass3', () => {
    cy.visit('https://example.cypress.io')
  })
})


//describe as testsuite --> testcases (it)
//describe -- You can have multiple describe 