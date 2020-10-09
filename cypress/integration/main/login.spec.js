context('Login', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
  });

  it('should not allow play without a name', () => {
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-confirm').click();
    cy.wait(200);
    cy.get('.swal2-popup').should('be.visible');
    cy.get('.main').should('be.visible');
    cy.get('.game').should('not.be.visible');
    cy.get('.score').should('not.be.visible');
  });

  it('should allow play with a name', () => {
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-input').type("Jogador");
    cy.get('.swal2-confirm').click();
    cy.wait(200);
    cy.get('.swal2-popup').should('not.be.visible');
    cy.get('.main').should('not.be.visible');
    cy.get('.game').should('be.visible');
    cy.get('.score').should('not.be.visible');
  });
});