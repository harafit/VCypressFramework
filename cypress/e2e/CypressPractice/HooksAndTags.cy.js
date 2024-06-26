describe('TestSuites',()=>{


    before(()=>{

        cy.log('I am in Before')

    })

    
    before(()=>{

        cy.log('I am in Before 1')

    })

    after(()=>{

        cy.log('I am in After')
        
    })

    after(()=>{

        cy.log('I am in After 1')
        
    })


    beforeEach(()=>{

        cy.log('I am in Before Each')
        
    })

    afterEach(()=>{

        cy.log('I am in After Each')

        
    })

    it('Method 1',()=>{

        cy.log('Method 1 is Executing')
    })

    it('Method 2',()=>{

        cy.log('Method 2 is Executing')
    })
})