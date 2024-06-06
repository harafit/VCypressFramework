describe('Navigation Command in Cypress', ()=>{

    it('Navigation Commands',()=>{

    cy.visit('https://tutorialsninja.com/demo/')

    cy.get(':nth-child(1) > .product-thumb > .image > a > .img-responsive').click()


    //Go Back

    cy.go('back')
    cy.title().should('eq','Your Store')

    //Forward

    cy.go('forward')
    cy.title().should('eq','MacBook')

    cy.go(-1)
    cy.title().should('eq','Your Store')


    cy.go(1)
    cy.title().should('eq','MacBook')


    cy.reload()


    })


})
