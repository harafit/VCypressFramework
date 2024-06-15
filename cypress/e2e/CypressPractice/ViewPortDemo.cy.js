describe('Responsive Design', function() {
    beforeEach(()=>{

        cy.visit('https://primeng.org/toast')

        cy.wait(1000)        
    })
    
    
    
    it('Responsive Design - IPhone 8', function() {
      
      cy.viewport('iphone-8')

      cy.wait(5000)
      cy.get('basic-doc > .card > p-button.p-element > .p-ripple').click()
  
      cy.get('.p-toast-summary').contains('Success')

      cy.get('.p-toast-detail').contains('Message Content')

    })

    it('Responsive Design - macbook-16', function() {
      
        cy.viewport('macbook-16')
        
        cy.wait(5000)
        cy.get('basic-doc > .card > p-button.p-element > .p-ripple').click()
    
        cy.get('.p-toast-summary').contains('Success')
  
        cy.get('.p-toast-detail').contains('Message Content')
  
      })

      it('Responsive Design - macbook-16', function() {
      
        cy.viewport(550, 750)
        
        cy.wait(5000)
        cy.get('basic-doc > .card > p-button.p-element > .p-ripple').click()
    
        cy.get('.p-toast-summary').contains('Success')
  
        cy.get('.p-toast-detail').contains('Message Content')
  
      })
  
    
  })
  
  