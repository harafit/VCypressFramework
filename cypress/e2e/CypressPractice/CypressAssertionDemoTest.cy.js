//https://tutorialsninja.com/demo/
describe('Practicing Assertion', ()=>{

    it('Assertions',()=>{

    cy.visit('https://www.google.com/search?q=cypress+automation')



    cy.get('#APjFqb').then((searchbox)=>{
        expect(searchbox.text()).to.equal("cypress automation")
    })

    cy.get('#APjFqb').should('have.text',"cypress automation")

    cy.get('#APjFqb').should('contain',"cypress automation")

    cy.get('#APjFqb').should('have.html',"cypress automation").and('have.attr',"id").and('include','APjFqb')

    cy.get('#APjFqb').should('be.visible')


    cy.get('#APjFqb').then((searchbox)=>{
        expect(searchbox.text()).to.have.length(18)
    })
})

})
