describe('Todo app', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('should enter on page', () => {
    cy.contains('Login')
  });

  // it('should allow to create an user', () => {
  //   cy.contains('Crear una cuenta').click()
  //   cy.contains('ingresar').click()
  //   cy.contains('Crear una cuenta').click()

  //   cy.get("form input[name='displayName']").first().type('UserTest')
  //   cy.get("form input[name='email']").last().type('mailtest123@mail.com')
  //   cy.get("form input[name='password']").last().type('password12345678')
  //   cy.get("button[type='submit']").click()

  //   cy.get("button[aria-label='logout']").click()
  // })

  // it('should allow login', () => {
  //   cy.get("form input[name='email']").last().type('mailtest123@mail.com')
  //   cy.get("form input[name='password']").last().type('password12345678')
  // })
})