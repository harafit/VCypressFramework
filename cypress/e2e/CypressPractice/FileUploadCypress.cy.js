//https://the-internet.herokuapp.com/upload


describe('File Upload Demo', ()=>{

    it('File Upload Demo', function(){

        cy.visit('https://the-internet.herokuapp.com/upload')

        cy.get('#file-upload').attachFile('imageDemo.jpeg')

        cy.get('#file-submit').click()

        cy.get('#uploaded-files').contains('imageDemo.jpeg')


    })

})