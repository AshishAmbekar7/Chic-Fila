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
        cy.visit("/")
        cy.get('#username').type(logindata.username)
        cy.get('#password').type(logindata.password)
        cy.get('#kc-login').click()
    //   cy.visit("/")
    //click on location user portal
        cy.get("[title='Location User Portal']").click()
    //click on amigo symbol
        cy.get("div[id='Create_Area_Support_Team'] div div[class='status-selector__wrapper dashboard-widget-inner'] div[class='status-selector__content with-assigneePanel with-initiatePanel with-2-elements'] div[class='status-selector__assignees'] div[title='Show all items assigned to me or any group I am a member of'] div i[class='material-icons']").click()
      //click on create new area support team
        cy.contains('Create New Area Support Team').click()
    //click on parent region node picker
        cy.contains('node_picker').click()
    //click on search field
        cy.get(':nth-child(3) > .gwt-TabBarItem > .gwt-Label').click()
    //type the required region node
        cy.get("input[class='gwt-SuggestBox']").type("Test_support_0901")
    //click on search button
        cy.get(".stibo-GraphicsButton.material.SearchButton").click()
    //click on ok button
        cy.get("button[class='stibo-GraphicsButton'] span[class='text']").click()
    //enter area support team name
        const random_region_admin = Math.random().toString(36).substring(2,12)
        cy.get("[class='gwt-TextBox stibo-StateFlow-Unbound-Variable stibo-Value stibo-Value-Text mandatory']").type(String(random_region_admin))
        //click on next button
        cy.get(".text").click()
        //validate the confirm message
        cy.get("[class='portal-alert-popup-content-details__details']").then(function(msg_data)
        {
            const text_const = msg_data.text()
            expect(text_const).to.includes("Your Area Support Team has been submitted")
        })
        //type area support team code
        const randomnumber2 = Math.floor(Math.random()*(9))
        cy.get('#Area_Support_Team_Code > .widgetAndIconsWrapper > [style="margin-right: 8px;"] > :nth-child(1) > .gwt-TextBox').type(Number(0)+randomnumber2)
       //select area support team type
        cy.get("[class='dropdown stibo-Value validator-text mandatory-for-approval stibo-Value-Text mandatory']").select('L')
        
        //select start date
        const randomnumber = Math.floor(Math.random()*(7-2+1))+2
        cy.log(randomnumber)
        cy.get("div[id='Start_Date'] div[class='widgetAndIconsWrapper'] div div input[placeholder='yyyy-MM-dd']").click()
        cy.get(":nth-child("+randomnumber+") > :nth-child("+randomnumber+") > .datePickerDay").click()
      
      //select assignment start date
       cy.get("body > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > input:nth-child(1)").click()
        cy.get(":nth-child("+randomnumber+") > :nth-child("+randomnumber+") > .datePickerDay").click()
        cy.get('.portal-alert-popup-close-box > .material-icons').click()
        

     //click on active area support team roles
        cy.get("div[id='stibo_tab_Active_Area_Support_Team_Roles'] div[class='tabs-panel-tab-inner'] div span[class='gwt-InlineLabel']").click()
      
       //click and select  roles  
        for(let i=0;i<5;i++)
        {
        cy.get("body > div:nth-child(10) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > i:nth-child(1)").click({force:true})
        if(i==2 || i==3 || i==4)
        {
        cy.get(".stibo-Dropdown.FormFieldWidget").select(i)
        cy.get('.icon > .material-icons').click()
        cy.get("#tree_expanded_node_StaffRoot").click()
        const webelements = cy.get("[class='treeRow ']")
        const admin_index = Math.floor(Math.random()*20)
        webelements.eq(admin_index).click()
        cy.get("button[class='stibo-GraphicsButton'] div span.text").click()
        cy.get("button[class='stibo-GraphicsButton'] div span.text").click()
        cy.log(i)
        }
        }
        //select dates for roles
        for(let k = 0;k<3;k++)
        {
            cy.wait(4000)
        cy.get("td:nth-child(5)").contains("yyyy-MM-dd").eq(0).dblclick()
        const assign_index = Math.floor(Math.random()*(randomnumber+1))
        cy.get("[class='gwt-TextBox DatePickerView']").click()
        cy.get("[class='datePickerDay ']").eq(assign_index+12).click()
        cy.get("[class='stibo-GraphicsButton']").contains("Save").click()
        }

        //clic on create button
        cy.wait(5000)
        cy.get('.SubmitButton > div > .text').click()
        cy.get("[class='portal-alert-popup-content-details']").then(function(text_ext)
        {
            const extracted_text = text_ext.text()
            expect(extracted_text).to.includes("1 reference was created!")
        })
    })
})