
describe('Handle',function(){
    Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from failing the test
        return false
      })
    it('loads examples', () => {
        const url = 'https://www.ebay.com/'
        cy.visit(url)
        cy.get('input[type="text"]').type('book')
        cy.get('#gh-btn').click();
    })

})