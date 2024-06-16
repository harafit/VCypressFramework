describe('Custom Command',()=>{


    it('Custome Commands in Cypress', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.Login('Admin','admin123')
            
    })


})