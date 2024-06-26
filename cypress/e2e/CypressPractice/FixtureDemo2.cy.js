
describe('Demo for Reading Data From Fixture Before',function(){
    
    let testdatademo;
    before(()=>{
        cy.fixture('orangeHrms').then((data)=>{
            testdatademo = data
        })

    })
    
    
    
    
    it('Read Data From Fixture Before', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")


            cy.get('input[placeholder="Username"]').type(testdatademo.username)
            cy.get('input[placeholder="Password"]').type(testdatademo.password)
            cy.get('button[type="submit"]').click()
            cy.get('img[alt="client brand banner"]').should('be.visible')
            
    })

})