
const loginElementLocators = require('../PageElements/PageObjectElements.json')
export class loginPageElement{



username(username_value)
{
    cy.get(loginElementLocators.LoginPageLocators.username_demo).type(username_value)
    return
}

password(password_value)
{
    cy.get(loginElementLocators.LoginPageLocators.password_demo).type(password_value)
    return
}

clickonloginbutton()
{
    cy.get(loginElementLocators.LoginPageLocators.button_demo).click()
}

}