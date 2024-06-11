describe('Handle Tabs', ()=>{


    it('Handle Tabs In Cypress - Approach 1',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        cy.get('.example a').invoke('removeAttr','target').click()

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

    })

    it.only('Handle Tabs In Cypress - Approach 2',()=>{

        cy.visit('https://the-internet.herokuapp.com/windows')
        
        
        cy.get('.example a').then((u)=>{
            let url = u.prop('href')
            cy.log(url)
            cy.visit(url)
        })

        cy.url().should('include','https://the-internet.herokuapp.com/windows/new')

        cy.go('back')
    })

})