describe('File Download Demo', ()=>{

    it('File Download Demo', function(){

        cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','exampleDemo.jpg')
        cy.readFile('./mydownloads/exampleDemo.jpg').should('exist')

        cy.downloadFile('https://www.learningcontainer.com/sample-php-file/#','mydownloads','Demo.php')
        cy.readFile('./mydownloads/Demo.php').should('exist')

    })

})