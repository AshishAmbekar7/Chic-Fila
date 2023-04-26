/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import 'cypress-iframe'
import Homepage from './PageobjectWebelement/Homepage'
describe('testsuite2', ()=>
{
    it('testscript1', ()=>
    {
      cy.visit(Cypress.env('url'))
        const homepage = new Homepage()
        

        //checkbox
        homepage.getCheckbox().check(['option1','option3']).should('be.checked').and('have.value','option1')

        //static dropdown
        homepage.getstaticdropdown().select('option2').should('have.value','option2')

        //dynamic dropdown
        homepage.getdynamicdropdownInptext().type('ind')
        homepage.getdynamicdropdownoptions().each(($e1,index,$list) =>
        {
          if($e1.text() === 'India')
          {
            cy.wrap($e1).click()
          }
        })
        homepage.getdynamicdropdownInptext().should('have.value','India')

        //hide button check
        homepage.getHidetextbox().click()
        homepage.getDisplayText().should('be.hidden')

        //radio button
        homepage.getradiobutton().check('radio2').should('be.checked')

        //alert handling
        homepage.getAlertbtn().click()
        cy.on("window:alert",(str) =>
        {
          expect(str).to.equal("Hello , share this practice page and share your knowledge")
        }) 
        homepage.getConfirmBtn().click() 
        cy.on("window:confirm",(str) =>
        {
          expect(str).to.equal("Hello , Are you sure you want to confirm?")
        }) 

        //new browser tab handling
        //  cy.get('#opentab').then(function(e1)
      //  {
      //     const ur1 = e1.prop('href')
      //     cy.visit(ur1)
      //  })
       homepage.getOpentab().invoke('removeAttr','target').click()
       cy.url().should('include','rahulshettyacademy')

       //navigating
       cy.go('back')

       //table handling
       homepage.getTableHandling().each(($e1,index,$list) =>
       {
          if($e1.text().includes('Python'))
          {
            homepage.getTableHandling().eq(index).next().then(function(price)
            {
              const price_text = price.text()
              expect(price_text).to.equal('25')
            })
          }
       })

       //mousehover
      // cy.contains('Top').click({force:true})
      homepage.getMousehover().invoke('show')
      homepage.getTopText().click()
       cy.url().should('include','top')
      //frames
       homepage.getFrameloaded()
       homepage.getlearningpathFrame().click()
       

    }

    )

})