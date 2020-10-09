describe('tetr.io', () => {
  it('should display tetr.io website', () => {
    cy.viewport('ipad-2')
    cy.visit('https://uandersonricardo.github.io/tetr.io/')
    cy.title().should('include', 'tetr.io')
  })
})