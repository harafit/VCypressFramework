describe('Radio Button and Checkboxes', ()=>{

    it.skip('Radio Button and Checkboxes',()=>{


        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#male').should('be.visible')

        cy.get('#female').should('be.visible')

        cy.get('#male').check().should('be.checked')

        cy.get('#female').should('not.be.checked')
        
        cy.get('#female').check().should('be.checked')

        cy.get('#male').should('not.be.checked')
        

    })


    it('Checkboxes',()=>{


        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('#sunday').should('be.visible')
        
        cy.get('#sunday').check().should('be.checked')

        cy.get('#sunday').uncheck().should('not.be.checked')

        cy.get('input.form-check-input[type="checkbox"]').check()

        cy.get('input.form-check-input[type="checkbox"]').uncheck()
        
        cy.get('input.form-check-input[type="checkbox"]').last().check().should('be.checked')

        cy.get('input.form-check-input[type="checkbox"]').first().check().should('be.checked')
        
        cy.get('input.form-check-input[type="checkbox"]').eq(4).check().should('be.checked')


    })
})
