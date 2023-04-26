class LoginpageElements
{
    getUsername()
    {
      return  cy.get('#username')
    }
    getPassword()
    {
      return  cy.get('#password')
    }
    getLgnBtn()
    {
      return  cy.get('#kc-login')
    }

}
export default LoginpageElements;