/// <reference types = "Cypress" />
/// <reference types = "cypress-iframe" />
import "cypress-localstorage-commands"
import 'cypress-iframe'
describe('testsuite2', ()=>
{ 
    it('testscript1', ()=>
 {
   //  cy.visit('/') 
   //  cy.get("[type='email']").type(Cypress.env('username'))
   //  cy.get("[type='password']").type(Cypress.env('password'))
   //  cy.contains('Log In').click()

    cy.visit('https://shamrockds.riversand.com',
    { failOnStatusCode: false }
      )
      cy.get("[type='email']").type(Cypress.env('username'))
     cy.get("[type='password']").type(Cypress.env('password'))
      cy.contains('Log In').click()
      cy.wait(10000)
      // cy.location().should((loc) => {
      //   expect(loc.pathname.toString()).to.contain('/home');
      // });
      cy.contains('pimadmini@codifyd.com').click()
      // cy.visit({
      //   url: 'https://shamrockds.riversand.com/search-thing',
      //   method: 'GET',
      // })
      cy.visit({   
      url: 'https://shamrockds.riversand.com/home',
      method: 'GET'
    })
      //cy.visit({
      //  url: 'https://shamrockds.riversand.com/home',
      //  method: 'GET',
    //  })
      
    //  cy.contains('click here').click()
     // cy.visit('https://shamrockds.riversand.com/home')
   // cy.origin('https://shamrockds.riversand.com', () => {
      
    //  cy.visit('https://shamrockds.riversand.com',{ failOnStatusCode: false })
     // cy.wait(20000)
     // cy.url().should('include',Cypress.env('assert_var'))
   //   cy.get('#app')
     // cy.contains("Quick Actions").click()
      //cy.contains('Inbound Request').eq(0).click()
     // cy.wait(2000)
    //  cy.contains('tags-container').eq(1).click()
//}) 
})
 })
