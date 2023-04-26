/// <reference types = "Cypress" />
import LoginpageElements from "./pageobjectfolder/LoginpageElements"
import Dashboardpage from "./pageobjectfolder/Dashboardpage"

describe('Workflowsuite',function()
{
  before(function()
  {
    cy.fixture('example').then(function(data)
    {
      globalThis.data = data
    }) 
  })
    it('testcase1',function()
    {
        const loginelements = new LoginpageElements()
        const dashboardpage = new Dashboardpage()
      //Login to step WebUI
        cy.visit(Cypress.env('url'))
        loginelements.getUsername().type(data.username)
        loginelements.getPassword().type(this.data.password)
        loginelements.getLgnBtn().click()
        // variables
        
      //  cy.get(':nth-child(27) > .iconcell > .webstart-page-link > .webui-icon > img').click()
      //visit and validate MSC WebUI
     cy.visit("https://codifydus-sb02.mdm.stibosystems.com/webui/MSC_WebUI#deepLink=1&contextID=Global&workspaceID=Main&screen=homepage")
     cy.url().should('include','MSC')

     //workflow user amigo click
       dashboardpage.getAmigoElement().click()
    // select supplier
        cy.get(':nth-child(1) > .status-selector__link').click()
    // logged in user id text
        cy.get("[class='gwt-Label info']").then(function(user_text)
        
        {
            this.log_usr = user_text.text()
        //    this.user_text_value = log_usr.substring(9,17)
        })
    //  extract assignee as per item number and click on checkbox  
        cy.assigneeclick(item_number,this.log_usr)
       // add new primary supplier button
       cy.get('.no-padding > .material-icons').click()
       // expand and select supplier
       cy.get('#tree_expanded_node_Supplier_Data_Root').click()
       cy.get('#tree_expanded_node_sdf_supplier_Z').click()
       cy.get("div[class='treeRow '] div[class='treeItem treeItem-entity treeItem-objecttype-supplier']").each(($e1,index,$list) =>
       {
        if($e1.text().includes(primary_supplier_id))
        {
            cy.get("div[class='treeRow '] div[class='treeItem treeItem-entity treeItem-objecttype-supplier']").eq(index).click()
        }
       })
       cy.get("tbody tr td:nth-child(2) div button[class='stibo-GraphicsButton'] div:nth-child(1) span.text").click()

       //validate primary supplier id
       cy.get('#New_Primary_Supplier > .widgetAndIconsWrapper > .ZebraTable > .ZebraTable-content > table > tbody > .even > :nth-child(1) > .gwt-Anchor').then(function(str1)
       {
        const str2 = str1.text()
        expect(str2).to.equals(primary_supplier_id)
       })
    //   cy.get("tr[class='even'] td[class='readonly'] a.gwt-Anchor").should('have.value','Supp_110667')
       
     // save button
    // cy.get('.SaveButton').click()
       
    //execute switch
    cy.get(':nth-child(2) > div > .text').click()

    // if unsave changes occur   cy.get('.button-panel > .stibo-GraphicsButton > div > .text')
    
    

    //back to dashboard
    cy.get('.navbar-logo-small').click()
    
    cy.wait(2000)
    //warning for changes
    cy.get(".button-panel > .stibo-GraphicsButton > div > .text").then($button => {
       if ($button.is(':visible')){
         cy.wrap($button).click()
       }
     })
     //click on second stage
    cy.get("[class='gwt-Label status-selector__link state state-UpdateSupplierItem']").click()

     //grab the list
     cy.clickitemnumber(item_number)

    //click on primary supplier
    cy.contains('Primary Supplier Details').click()

    // validate primary supplier id
     cy.get("[class='sheet-header-cell sheet-header-vertical sheet-header-title']").then(function(str_id)
     {
        const val_supplier = str_id.text()
        expect(val_supplier).to.include(primary_supplier_id)
     })
   //click submit 
 cy.get("[class='stibo-GraphicsButton material SubmitButton']").click()

 //back to dashboard
 cy.get('.navbar-logo-small').click()

 //review stage click
 cy.get("[title='Review Data']").click()

 cy.wait(4000)

 //click on item number in third stage
 cy.clickitemnumber(item_number)
 //validate supplier id
 cy.get("[class='sheet-header-cell sheet-header-vertical sheet-header-title']").then(function(third_str)
 {
  const stage3_text = third_str.text()
  expect(stage3_text).to.include(primary_supplier_id)
 })
//approve button
 cy.get('.stb-buttonsTable > :nth-child(1) > :nth-child(3)').click()


//back to dashboard
 cy.get('.navbar-logo-small').click()
//click on 4th stage
 cy.get("[title='Clear Prices']").click()

 //select the item number
 cy.clickitemnumber(item_number)

 //navigate to primary tab
 cy.contains("Primary Supplier Details").click()
cy.wait(3000)

 cy.get("body div div[class='stb-tabPanel stb-NodeDetailsContent'] div div:nth-child(3) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(2) div:nth-child(1) div:nth-child(6) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(1) div:nth-child(3) div:nth-child(1) div:nth-child(1) div:nth-child(1) table:nth-child(1) thead:nth-child(1) tr:nth-child(1) th:nth-child(1) div:nth-child(2)").then(function(price_str2)
 {
    const price_text_val = price_str2.text()
    expect(price_text_val).to.include(primary_supplier_id)
 })
 cy.contains("Confirm Clear").click()
 cy.log("program end")
    })
})