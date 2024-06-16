import csv from 'neat-csv'
let data;
describe('Read Data from CSV', ()=>{

    it('Read Data',function(){


        cy.visit('https://demo.opencart.com/index.php?route=account/register&language=en-gb')
        cy.fixture('users.csv').then(csv).then((testData)=>{
            data = testData
        })
   
    })
    
})
