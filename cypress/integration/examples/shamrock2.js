/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe';

describe('testsuite2', ()=>
{
    it('testscript1', ()=>
    {
      Cypress.on('uncaught:exception', (err, runnable, promise) => {
        if (promise) {
          return false
        }
      })
      cy.clearAllCookies()
      cy.clearAllLocalStorage()
    //login
     cy.visit("/")
     cy.get("[type='email']").type(Cypress.env('username'))
     cy.get("[type='password']").type(Cypress.env('password'),{ log: false })
     cy.contains('Log In').click() 
     cy.wait(5000)
     cy.url().should('include',Cypress.env('assert_var'))
     
     //click on quick actions
     cy.contains("Quick Actions").click()
     //click inbound request
     cy.contains('Inbound Request').eq(0).click()
     cy.wait(2000)
     //click family line group and select coffee
     cy.get("[title='Family Line Group Taxonomy']").next().click()
     cy.get("[placeholder='Search']").type('coffee{enter}',{force: true})
     cy.get('#toggle-icon').eq(0).click()
     cy.wait(2000)
     cy.get("[button-text='Select']").click()

     cy.get("[class='dropdown-icon flow-icon-size-12']").eq(3).click({force: true})
     cy.contains("Shamrock Dairy").eq(0).click({force:true})
     //enter item desc
     cy.get("[class='textarea-container fit']")
     .find("[id='textarea']")
     .type("Automation_textdesc",{force:true})
     //gtin number
     cy.get("#input-4").find("[aria-labelledby='paper-input-label-4']").type("00000001231311",{force:true})
     //enter manufacturing id
     cy.get("[aria-labelledby='paper-input-label-6']").type("at_manuid",{force:true})
   //select brand name
     cy.get("[class='dropdown-icon flow-icon-size-12']").eq(2).click({force:true})
     cy.get("[class='p-relative without-select-all-checkbox']")
     .find("[id='input'][placeholder='Search']").type("4Mular",{force:true})
     cy.get("[class='not-only-option']").click({force:true})
     //select item catchweight
     cy.get("[title='Item Catchweight Indicator']").next().click({force:true})
     cy.wait(2000)
     cy.get(".sub-title.item-length-overflow").eq(0).click({force:true})
     //select packaging level
     cy.get("[title='Packaging Level']").next().click({force:true})
     cy.get(".sub-title.item-length-overflow").eq(0).click({force:true})
     //click on create button
     cy.get("[id='buttonTextBox'][title='Create']").click({force:true})
     //click next button
     cy.get("[title='Next']").click({force:true})
     cy.wait(3000)
     cy.get("[title='Next']").click({force:true})
   //click on show me entity
     cy.get("[title='Show me the entity']").click({force:true})
     //click on validate inbound
     cy.get("[class='data-list']").click()
     cy.wait(3000)  
     //click on maufacturer
    cy.get(".tags-container").eq(2).click({force:true})
     cy.wait(6000)
//manufacurer
     cy.get("[class='dropdown-icon flow-icon-size-12']").eq(4).click({force:true})
     cy.get("[class='p-relative without-select-all-checkbox']")
     .find("[id='input'][placeholder='Search']").type("1908 Brands",{force:true})
     cy.get("[class='not-only-option']").eq(0).click({force:true})
     //depth
     cy.get("[class='dropdown-icon pebble-icon-size-12']").eq(5).click({force:true})
     cy.get("[title='MMT - Millimetre']").click({force:true})
     cy.get("[aria-labelledby='paper-input-label-34']").type("12",{force:true})
      //depth = 5
      //height=3
      //width=4
      cy.get("[aria-labelledby='paper-input-label-35']").type("12",{force:true}) //type value
      cy.get("[class='dropdown-icon pebble-icon-size-12']").eq(4).click({force:true})
    cy.get("[class='uom-list']")
    .contains("Centimetre").click({force:true}) //dropdown click
     cy.wait(4000)
     //height
     cy.get("[aria-labelledby='paper-input-label-36']").type("12",{force:true}) //type value
     cy.get("[class='dropdown-icon pebble-icon-size-12']").eq(3).click({force:true})
   cy.get("[class='uom-list']")
   .contains("Centimetre").click({force:true}) //dropdown click
   //net weight
   cy.get("[aria-labelledby='paper-input-label-37']").type("12",{force:true}) //type value
   cy.get("[class='dropdown-icon pebble-icon-size-12']").eq(2).click({force:true})
 cy.get("[class='uom-list']")
 .contains("Microgram").click({force:true}) //dropdown click
 //gross weight
 cy.get("[aria-labelledby='paper-input-label-38']").type("12",{force:true}) //type value
   cy.get("[class='dropdown-icon pebble-icon-size-12']").eq(1).click({force:true})
 cy.get("[class='uom-list']")
 .contains("Milligram").click({force:true}) //dropdown click
     //shelflife
     cy.get("[aria-labelledby='paper-input-label-41']").type("10")
     //packageqty
     cy.get("[aria-labelledby='paper-input-label-42']").type("11")
     //packunit
     cy.get("[aria-labelledby='paper-input-label-43']").type("12")
    //quantity of trades
    cy.get("[aria-labelledby='paper-input-label-44']").type("13")
    //quant of labels
    cy.get("[aria-labelledby='paper-input-label-45']").type("14")
  //uom
  cy.get("[title='Pack UOM']").next().click()
  cy.contains("Bunch").click()
  //portion qty
  cy.get("[aria-labelledby='paper-input-label-39']").type("100")
  //save button
  cy.get("[id='buttonTextBox']").contains("Save").click()
  cy.wait(2000)
  //click summary
  cy.get("[id='tab-summary']").click({force:true})
  cy.wait(4000)
  //submit request
cy.contains("Submit Request").click()
cy.contains("Approve").click()

    })
})
   
