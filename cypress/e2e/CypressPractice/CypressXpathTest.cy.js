//https://tutorialsninja.com/demo/
describe('Practicing Assertion', ()=>{

    it('Assertions',()=>{

    cy.visit('https://www.google.com/search?q=cypress+automation')

    cy.xpath("//textarea[@id='APjFqb']").clear()

    cy.xpath("//textarea[@id='APjFqb']").type("Selenium Automation {enter}")

    cy.wait(4000)

    cy.xpath("(//div[@class = 'GKS7s'])[6]").click()

    cy.wait(4000)

    cy.xpath("//textarea[@id='APjFqb']").clear()

    cy.xpath("//textarea[@id='APjFqb']").type("Selenium Automation {enter}")

    cy.wait(4000)

    cy.xpath("//span[text()= 'Python']").click()

    

    })
})

