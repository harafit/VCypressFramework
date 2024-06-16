
describe('Demo for Reading Data From Fixture',function(){
    
    it('Read Data From Fixture', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        cy.fixture('orangeHrms').then((testdata)=>{

            cy.get('input[placeholder="Username"]').type(testdata.username)
            cy.get('input[placeholder="Password"]').type(testdata.password)
            cy.get('button[type="submit"]').click()


            cy.get('img[alt="client brand banner"]').should('be.visible')
            
        })
    })

})