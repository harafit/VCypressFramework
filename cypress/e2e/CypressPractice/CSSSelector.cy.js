describe('CSS Selector Demo', function(){

    it('CSS Selector',function(){

        cy.log("Test Case 1 Started")
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.log("Navigated to URL")
        //cy.wait(4000)
        cy.get('[name="username"]').type('Admin')
        cy.log("Entered the Username")

        cy.get('[name="password"]').type('admin123')

        cy.log("Entered the password")

        cy.get('.oxd-button').click()

        cy.log("Clicked on Login button")

        cy.get(':nth-child(2) > .oxd-main-menu-item').click()

        cy.get('.oxd-userdropdown-tab').should('be.visible')

        //cy.get('')
        
    })

})
