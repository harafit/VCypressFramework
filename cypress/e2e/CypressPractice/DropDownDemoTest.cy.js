describe('Dropdown in Cypress', ()=>{

    it('Dropdown in Cypress',()=>{


        cy.visit("https://example.cypress.io/commands/actions")

        //Index
        cy.get('.form-control.action-select').select(2);

        //Visible Text
        cy.get('.form-control.action-select').select('apples')

        //Value
        cy.get('.form-control.action-select').select("fr-bananas")

        cy.get('.form-control.action-select').should('contain','bananas')
       // cy.get('.form-control.action-select').should('have.text','bananas');

    })

    it('Dropdown without select tag',()=>{

        cy.visit('https://www.dummyticket.com/dummy-ticket-for-visa-application/')

        cy.get('#select2-billing_country-container').click()

        cy.get('.select2-search__field').type('India').type('{enter}')

        cy.get('.select2-search__field').type('Iran').type('{enter}')

        cy.get('#select2-billing_country-container').should('have.text','Iran')

        cy.get('#select2-billing_country-container').should('deep.equal','<span#select2-billing_country-container.select2-selection__rendered>')

        //#select2-billing_country-container

        //"select2-billing_country-result-82mv-IN"
        //"select2-billing_country-result-zmwb-IN"
    })

    it.only('Dynamic Dropdown',()=>{

        cy.visit('https://www.google.com/')
        cy.get('.gLFyf').type('cypress automation')


        cy.wait(3000)

        cy.get('div.wM6W7d>span').should('have.length',13)

        cy.get('div.wM6W7d>span').each(($el, index, $list) => {
            // $el is a wrapped jQuery element
            cy.log($el.text())
            if ($el.text() === 'cypress automation basics') {
              // wrap this element so we can
              // use cypress commands on it
              cy.wrap($el).click()
            } 
          })
          cy.wait(3000)

    cy.get('.gLFyf').eq(1).should('have.value','cypress automation basics')

    })



})