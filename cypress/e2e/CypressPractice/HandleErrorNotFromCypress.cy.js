describe('Handle error which is not from cypress', function() {
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
   
   
    it('Handle error which is not from cypress', function() {


        cy.visit('https://www.ebay.com/')
        
        cy.wait(1000)

        cy.get('input[type="text"]').type('laptop')

        cy.get('#gh-btn').click()

      
    })
  
    
  })
  
  