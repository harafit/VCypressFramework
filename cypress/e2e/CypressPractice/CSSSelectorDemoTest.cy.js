describe('Practicing CSS Selector', ()=>{

    it('CSS Selector',()=>{

//Visit Command
    cy.visit('https://www.google.com/')

    cy.get('.gLFyf').type("Cypress Automation {enter}");

//Using ID 
    cy.get('#APjFqb').then((searchbox)=>{
        cy.log("Text Visible - 1 "+ searchbox.text())
    })

//Attribute and Value
    cy.get('textarea[class="gLFyf"]').then((searchbox)=>{
        cy.log("Text Visible - 2 "+ searchbox.text())
        
    })

//Using classname
    cy.get('.gLFyf').eq(1).then((searchbox)=>{
        cy.log("Text Visible - 3 "+ searchbox.text())
    })


    })

})