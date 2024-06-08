describe('Mouse Operations', ()=>{

    it('MouseHover', ()=>{

        cy.visit('https://demo.opencart.com/')

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('not.be.visible')
        
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').should('be.visible')

        cy.get('body > main:nth-child(4) > div:nth-child(1) > nav:nth-child(1) > div:nth-child(3) > ul:nth-child(1) > li:nth-child(1) > div:nth-child(2) > div:nth-child(1) > ul:nth-child(1) > li:nth-child(2) > a:nth-child(1)').click();

        //cy.get(':nth-child(8) > .dropdown-toggle').trigger('mouseover').click()
    })


    it('Double Click ', ()=>{
        cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')

       // cy.frameLoaded('#iframeResult')

       //cy.get('button[ondblclick="myFunction()').click()
       
       
       //Approach 1
        //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').trigger('dblclick')
       //cy.iframe('#iframeResult').find('#field2').should('have.value',"Hello World!")

        // Approach 2
        //cy.iframe('#iframeResult').find('button[ondblclick="myFunction()"]').dblclick()
        //cy.iframe('#iframeResult').find('#field2').should('have.value',"Hello World!")
    

    })


    it('Right Click', ()=>{

        cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')

        //Approach 1 
        //cy.get('.context-menu-one').trigger('contextmenu')
        //cy.get('.context-menu-list').should('be.visible')

        //Approach 2

        cy.get('.context-menu-one').rightclick()
        cy.get('.context-menu-list').should('be.visible')


    })


    it('Drag and Drop', ()=>{
        //http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html

        cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html')

        cy.get('#box3').should('be.visible')
        cy.get('#box103').should('be.visible')

        cy.get('#box3').drag('#box103',{force:true} )


    })


    it.only('Scrolling ', ()=>{

        cy.visit("https://scroll.in/tag/Swiggy")
        cy.get('.search-next').scrollIntoView({duration:5000})

        cy.get('.search-next').should('be.visible')
    })

})