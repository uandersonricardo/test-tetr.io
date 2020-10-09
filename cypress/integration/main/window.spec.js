context('Window', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
  });

  it('should display tetr.io title', () => {
    cy.title().should('include', 'tetr.io');
  });

  it('should display tetr.io favicon', () => {
    cy.get('link[rel="icon"]').should('have.attr', 'href').and('include', 'assets/image/favicon.ico');
  });
});