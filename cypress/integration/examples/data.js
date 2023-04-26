
describe('convert data to Json', function()
{

  before('testbefore',function()
  {
    cy.fixture('data2.json').then(function(data)
    {
        globalThis.data = data
    })
  })

   it('read data from excel', function()
 { 
  cy.visit("https://rahulshettyacademy.com/angularpractice/")   

  for(let i=0;i<=data.length;i++)
  {
    
    for(let j=0;j<data[i];j++)
    {
      console.log(data[i]['<Name>'])
    }
  }

  cy.get(':nth-child(1) > .form-control').type(data[1]['<ID>'])
  cy.log(data[1]['<ID>'])
  const randomnumber2 = Math.floor(Math.random()*(7-2+1))+2
  cy.log(typeof(randomnumber2))
 })
}) 