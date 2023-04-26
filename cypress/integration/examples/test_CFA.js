/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'
describe('testsuite2', ()=>
{
    before('workflow_suite',function()
    {
        cy.fixture('logincfa').then(function(logindata)
        {
            globalThis.logindata  = logindata
        })
    })
    it('testscript1', ()=>
    {
        //Login to CFA step
        cy.visit("https://chick-fil-a-preprod.scloud.stibo.com/")
        cy.get('#username').type(logindata.username)
        cy.get('#password').type(logindata.password)
        cy.get('#kc-login').click()

        cy.origin("https://chick-fil-a-preprod.scloud.stibo.com/",()=>
        {
            cy.get("[title='Location User Portal']").click()
        
      //  cy.visit('https://chick-fil-a-preprod.scloud.stibo.com/webui/CFAUserPortal#contextID=Context1&workspaceID=Main&screen=homepage')
            cy.contains('Create New Region').click()
            cy.get("[class='gwt-TextBox stibo-StateFlow-Unbound-Variable stibo-Value stibo-Value-Text mandatory']").type("test_062023_29")
            cy.contains('Next').click()
            cy.contains('Confirmed').then(function(ext_text)
            {
                const conf_text = ext_text.text()
                expect(conf_text).to.includes('Confirmed')
            })
            cy.get("[class='portal-alert-popup-content-details']").then(function(ext_txt)
            {
                const conf_text = ext_txt.text()
                expect(conf_text).to.includes('Your Region has been submitted')
            })
           
            //pick start date
            cy.get("[class='gwt-TextBox stibo-Value-ISO-Date stibo-Value mandatory-for-approval mandatory validator-isodate']").click()
            cy.wait(12000)
            cy.get("body > div:nth-child(12) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(1) > td:nth-child(1) > div:nth-child(1) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(4) > td:nth-child(4) > div:nth-child(1)").click()
            cy.get("[class='material-icons portal-alert-popup-close-box__button']").click()
            cy.get('.SubmitButton > div > .text').click()
            cy.get("div.portal-alert-popup-content-details__details div.gwt-HTML").then(function(ext_text)
            {
                const conf_text1 = ext_text.text()
                expect(conf_text1).to.includes('Save is complete')
            })
            cy.get("[class='material-icons portal-alert-popup-close-box__button']").click()
            cy.get("div.portal-alert-popup-content-details__details div.gwt-HTML").then(function(extTest)
            {
                const extval = extTest.text()
                expect(extval).to.includes("Item was successfully submitted.")
            })
        })
     

    }) 

        

  
        
    }

    )

