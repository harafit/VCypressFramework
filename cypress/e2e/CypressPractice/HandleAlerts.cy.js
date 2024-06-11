describe('Handle Alerts' ,()=>{


    //1) - Handle Alert With only 'OK' option
    it('Java Script Alerts With Only OK', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(b)=>{

            expect(b).to.contain('I am a JS Alert')
        })

        cy.get('#result').should('have.text','You successfully clicked an alert')
    })

    //2) - Handle Alerts which is having OK and CANCEL option

    it('Java Script Alerts By Clicking on OK', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(b)=>{

            expect(b).to.contain('I am a JS Confirm')
        })

        cy.get('#result').should('have.text','You clicked: Ok')
  

        
    })


    it('Java Script Alerts By Clicking on Cancel', ()=>{
        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')
        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(b)=>{

            expect(b).to.contain('I am a JS Confirm')
        })
        cy.on('window:confirm',()=> false);

        cy.get('#result').should('have.text','You clicked: Cancel')

    })

    //3) - Handling Prompt Java Script Window
    it('Java Script Alerts - With Prompt Message', ()=>{

        cy.visit('http://the-internet.herokuapp.com/javascript_alerts')

        //cy.get("button[onclick='jsPrompt()']").click()

        cy.window().then((promptwindow)=>{
            cy.stub(promptwindow,'prompt').returns('Cypress Training')
        })
        cy.get("button[onclick='jsPrompt()']").click()
        

        cy.get('#result').should('have.text','You entered: Cypress Training')

    })

    //4) Authenticated Alert Popup
    it.only('Java Script Alerts', ()=>{


     /*  cy.visit('https://the-internet.herokuapp.com/basic_auth',{auth:{
            username:"admin",
            password:"admin"
        }}) */



        cy.visit('https://admin:admin@the-internet.herokuapp.com/basic_auth')

        cy.get("div[class='example'] p").should('have.contain','Congratulation')

    })





})