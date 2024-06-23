import neatCsv from 'neat-csv';
describe('Read Data from CSV', ()=>{
let table
before(()=>{


    cy.fixture('users.csv').then(neatCsv).then((data)=>{
        table = data
    }).then(console.table)
})

    it('Read Data',function(){


        cy.visit('https://demo.opencart.com/index.php?route=account/register&language=en-gb')
        
    
   
    })
    
})
