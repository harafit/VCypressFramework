describe('Handle Toast Messages', function() {
    it('Handle Toast Messages', function() {
      cy.visit('https://primeng.org/toast')

      cy.wait(1000)

      cy.get('basic-doc > .card > p-button.p-element > .p-ripple').click()
  
      cy.get('.p-toast-summary').contains('Success')

      cy.get('.p-toast-detail').contains('Message Content')

      cy.wait(5000)

      cy.get('.p-toast-summary').should('not.exist')
    })
  
    
  })
  
  
  //describe as testsuite --> testcases (it)
  //describe -- You can have multiple describe 