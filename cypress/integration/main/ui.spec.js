context('UI', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
  });

  it('should display logo', () => {
    cy.get('.main > .logo').should('be.visible');
  });

  it('should display button', () => {
    cy.get('.main > .play-button').should('be.visible');
  });

  it('should display login alert', () => {
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-popup').should('be.visible');
  });
});