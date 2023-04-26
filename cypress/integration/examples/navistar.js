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
     //click on vendor item
     cy.get("#actionItem").contains("Vendor Item").click()
     cy.wait(17000)
     //click on brand id
      cy.get("[title='Brand AAIAID']").next().click({force:true})
     cy.get("[class='p-relative without-select-all-checkbox'] [id='input']").type("A004 ",{force:true})
     cy.get("[class='not-only-option']").click({force:true})
      //click on Part Number aria-labelledby="paper-input-label-2
     cy.get("[title='Part Number']").next().next()
     .find("input")
     .type("automation Part number3",{force:true})
     //parts classification
     cy.get("[title='Parts Classification']").click({force:true})
     cy.get("[id='classificationSearchBar']").find("[id='input']").type("67520{enter}",{force:true})
     cy.contains("67520").dblclick({force:true})
     cy.wait(4000)
     cy.get("[id='simpleButton']").contains("Select").click({force:true})
     //create button ...This Element is inside 7 nested shadow DOM.
cy.get("#app").find("#contentViewManager")
.find("#wizardManage")
.find("#next").find("#simpleButton").eq(1).click({force:true});

//next button
//This Element is inside 6 nested shadow DOM.
cy.get("#app").shadow().find("#contentViewManager")
.find("#wizardManage").find("#next")
.find("#buttonTextBox").eq(1).click({force:true})
cy.get("[class='action-button-focus dropdownText btn btn-outline-primary m-l-5']").click()
cy.get("[title='Show me the entity']").click({force:true})
//code to be inserted
cy.contains("Hazardous and Regulatory Compliance").click({force:true})
cy.wait(7000)
cy.get("[title='Harmonized Tariff Code (Schedule B)']").next().click({force:true})
cy.get("[class='p-relative without-select-all-checkbox']").find("[id='input']").type("0714",{force:true})
cy.get("[class='not-only-option']").click({force:true})
cy.wait(3000)
//cy.contains("Save").click({force:true})
cy.get("[class='action-button-focus dropdownText btn btn-success']").click({force:true})
cy.wait(2000)
//click summary
cy.get("[id='tab-summary']").click()


//
//required attr validation
cy.get("[title='Required Attributes Validation']").click()
cy.wait(9000)
//select country of origin
cy.get("[title='Country of Origin (Primary)']").next().click()
//type country of origin
cy.get("[class='p-relative without-select-all-checkbox']").find("[id='input']").type("AD",{force:true})
cy.get("[class='title sub-title']").click({force:true})
cy.get("[class='btn btn-primary m-r-10']").eq(2).click({force:true})
cy.wait(1000)

cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(0).click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(1).click({force:true}).find("bedrock-attribute").find("input").type('2.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text']").eq(2).click({force:true}).find("bedrock-attribute").find("input").type('3.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='6']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='8']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='9']").click({force:true}).find("bedrock-attribute").contains("CM").click({force:true})
cy.wait(2000)

cy.get("[title='Package UOM - Each']").next().click()
cy.wait(2000)
cy.get("[class='p-relative without-select-all-checkbox']").type('BX')
cy.contains("Inner Pack (non-shippable)").click({force:true})
cy.get("[id='input-36']").find("input").type("10")

cy.get("[class='btn btn-primary m-r-10']").eq(1).click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='3']").click({force:true}).find("bedrock-attribute").find("input").type('1.1234',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").contains("GT").click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='5']").click({force:true}).find("bedrock-attribute").find("input").type('3.1234',{force:true})

cy.get("[title='Item Container Type']").click()
cy.wait(2000)
cy.contains("15").click({force:true})
cy.get("[aria-labelledby='paper-input-label-34']").type("20")

cy.get("[title='Item Quantity Size UOM']").next().click()
cy.wait(1000)
cy.contains("AS").click({force:true})
cy.get("[aria-labelledby='paper-input-label-35']").type("30")

cy.get("[title='Quantity per Application Qualifier']").next().click()
cy.wait(1000)
cy.contains("MAX").click({force:true})
cy.get("[title='Quantity per Application UOM']").click()
cy.wait(1000)
cy.contains("BD").click({force:true})

cy.get("[aria-labelledby='paper-input-label-37']").type("100")
cy.get("[aria-labelledby='paper-input-label-38']").type("100")
cy.get("[aria-labelledby='paper-input-label-39']").type("20")
cy.get("[aria-labelledby='paper-input-label-40']").type("automation part description")
cy.get("[class='btn btn-primary m-r-10']").eq(0).click({force:true})

cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='3']").click({force:true}).find("bedrock-attribute").contains("CAD").click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='4']").click({force:true}).find("bedrock-attribute").contains("10").eq(0).click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='6']").click({force:true}).find("rock-uom").find("input").type('123',{force:true})

cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='5']").click({force:true}).find("rock-uom").find("input").type('10.03',{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='7']").click({force:true}).find("bedrock-attribute").contains("15").click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='8']").click({force:true}).find("bedrock-attribute").contains("10").eq(0).click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='9']").click({force:true}).find("bedrock-attribute").find("input").type("234",{force:true})

cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='10']").click({force:true}).find("bedrock-attribute").contains("AC1").click({force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='11']").click({force:true}).find("bedrock-attribute").find("input").type("Automation_price_type",{force:true})
cy.get("[class='ag-cell ag-cell-not-inline-editing ag-cell-auto-height rs-cell-editable ag-cell-value ag-cell-wrap-text'][aria-colindex='12']").click({force:true}).find("bedrock-attribute").contains("HF").click({force:true})
cy.get("[title='Product Description – Long']").next().click({force:true})
cy.get("[aria-labelledby='paper-input-label-41']").type("automation_test_values",{force:true})
cy.get("[icon='pebble-icon:action-add-fill']").click({force:true})
cy.wait(2000)
cy.get("[id='simpleButton']").contains("Save").click({force:true})
cy.wait(8000)
cy.get("[title='Summary']").click({force:true})
cy.wait(6000)
cy.get("[id='buttonTextBox']").contains("Submit").click({force:true})
cy.wait(5000)

    })
})