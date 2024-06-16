
describe('Data Driven',function(){
    
    it('Data Driven', () => {

        cy.fixture('dataDrivenFixture').then((data)=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


        data.forEach((testData)=>{
            cy.get('input[placeholder="Username"]').type(testData.username)
            cy.get('input[placeholder="Password"]').type(testData.password)
            cy.get('button[type="submit"]').click()


            cy.get('img[alt="client brand banner"]').should('be.visible')

            cy.get('.oxd-userdropdown-tab').click()

            cy.get(':nth-child(4) > .oxd-userdropdown-link').click()

            cy.wait(5000)


        })
        }) 
})

})