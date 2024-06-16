import { loginPageElement } from "../../../PageObjects/PageActions/PageObjectElementLogin"

const Login_Element = new loginPageElement

describe('Demo for Reading Data From Fixture',function(){
    
    it('Read Data From Fixture', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

        Login_Element.username('Admin')
        Login_Element.password('admin123')
        Login_Element.clickonloginbutton()
            
    })

})