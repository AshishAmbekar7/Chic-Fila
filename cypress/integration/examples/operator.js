/// <reference types = 'Cypress'/>
import GetDate from "C://Users//sbavisa//CypressAutomation//cypress//integration//examples//GetDate.js"
describe('create new operator',()=>
{
    before(function()
    {
    cy.fixture('logincfa.json').then((data)=>
    {
        this.logincred = data
    })
})
    it('operator team',function()
{

     //Login to CFA step
     cy.visit("/")
     cy.get('#username').type(this.logincred.username)
     cy.get('#password').type(this.logincred.password)
     cy.get('#kc-login').click()
     const getdateobj  = new GetDate()
 
 //click on location user portal
     cy.get("[title='Location User Portal']").click()
    //click on operator link
    cy.get('#Create_Operator_Team > [style="position: absolute; overflow: hidden; inset: 40px 0px 0px;"] > .status-selector__wrapper > .status-selector__content > .status-selector__initiate-link-wrapper').click()
     //click on parent service node
     cy.get('[style="margin-right: 8px;"] > .material-icons').click()
     //expand the drop down
     cy.get("[id='tree_expanded_node_TeamsHierarchy']").click()
     //expand second node  and click the folder
     cy.get("[id='tree_expanded_node_R_304032']").click()
     cy.contains("Test_661041 (ST_661041)").click()
     //click OK button
     cy.get("table.nodepicker-button-panel tbody tr td .stibo-GraphicsButton").click()
     //enter text in  operator team name
     const random_operatorteamname = Math.random().toString(36).substring(2,12)
     cy.get('[style="margin-right: 8px;"] > :nth-child(1) > .gwt-TextBox').type(random_operatorteamname)
     //click next button
     cy.contains("Next").click()
    //enter operator team code
    const random_operatorcode = Math.random().toString(36).substring(2,4)
    cy.get('#Operator_Team_Code > .widgetAndIconsWrapper > [style="margin-right: 8px;"] > :nth-child(1) > .gwt-TextBox').type(random_operatorcode)
    //select team type
    cy.get('.dropdown').select('T')
    //select start date
    cy.get("[data-step-component-id='start_date'] div div div [class='gwt-TextBox stibo-Value-ISO-Date stibo-Value mandatory-for-approval mandatory validator-isodate']").click()
    cy.selectdate()
    //select end date
    cy.get('#End_Date > .widgetAndIconsWrapper > [style="margin-right: 8px;"] > :nth-child(1) > .gwt-TextBox').click()
    cy.get("[class='datePickerNextButton datePickerNextButton-up'] .html-face").click()
    cy.get('.datePickerNextButton > .html-face').click()
    getdateobj.random_getdate()
    //select assignment date
    cy.get("[data-step-component-id='assignment_start_date'] div div div [class='gwt-TextBox stibo-Value-ISO-Date stibo-Value mandatory-for-approval mandatory validator-isodate']").click()
    getdateobj.random_getdate()
    //click on  Active Operator Team Roles tab
    cy.contains("Active Operator Team Roles").click()
    //click on add roles button
    cy.contains("Add Roles").eq(0).click()
    //select roles
    cy.get("[class='stibo-Dropdown FormFieldWidget']").select('Operations Lead')
    //click on nodepicker
    cy.contains("node_picker").click()
    //expand staff node
    cy.get("[id='tree_expanded_node_StaffRoot']").click()
    //select random staff
    let random_staff = Math.floor(Math.random()*28)
    cy.get("[class='treeRow ']").eq(random_staff).click()
    //click ok button
    cy.get(".button-panel button.stibo-GraphicsButton").eq(1).click()
    //click ok button
    cy.get("[class='button-panel'] .stibo-GraphicsButton div span.text").click()
    //select assignment start date
    cy.get("[class='sheet-cell']").contains("yyyy-MM-dd").eq(0).dblclick()
    cy.get("[class='datePickerNextButton datePickerNextButton-up']").click()
    getdateobj.random_getdate()
    cy.get('.button-panel > .stibo-GraphicsButton > div > .text').click()
    //click create button
    cy.get('.SubmitButton > div > .text').click()
    //validate successful message
    cy.wait(8000)
    cy.get('.portal-alert-popup-content-details__details > .gwt-HTML').then(function(string_message)
    {
        const text_message = string_message.text()
        expect(text_message).to.equals("Item was successfully submitted.")
    })






})
})
