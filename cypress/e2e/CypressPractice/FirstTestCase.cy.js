
describe('My First Cypress Test Case', function(){

    it('Visit Command in Cypress - Positive',function(){

        cy.log("Test Case 1 Started")
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.log("Navigated to URL")
        cy.wait(5000)
        cy.title().should('eq',"OrangeHRM") //Assertion - If you are validating
        
    })

    it('Visit Command in Cypress - Negative',function(){

        cy.log("Test Case 2 Started")
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.log("Navigated to URL")
        cy.wait(5000)
        cy.title().should('eq',"OrangeHRM..") //Assertion - If you are validating
        cy.pause()
    })

})