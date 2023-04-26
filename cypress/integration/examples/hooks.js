/// <reference types = 'Cypress' />
describe('Protestsuite1',()=>
{   

    before(function()
    {
        cy.fixture('example').then(function(data)
        {
            this.data=data
        }
        )
    }
    )

    it('testcase1',function()
        {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get("form div input[name='name']").type(this.data.name)
        cy.get("select#exampleFormControlSelect1").select(this.data.gender)
    })
})