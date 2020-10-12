context('UI', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-input').type("Jogador");
    cy.get('.swal2-confirm').click();
    cy.wait(200);
    for (let i = 0; i < 5; i++) {
      cy.get('body').type('{downarrow}');
    }
    cy.wait(200);
    for (let i = 0; i < 200; i++) {
      cy.get('body').type('{downarrow}');
    }
    cy.wait(500);
  });

  it('should display login alert', () => {
    cy.get('.score .reset-button').click();
    cy.wait(200);
    cy.get('.swal2-popup').should('be.visible');
  });

  it('should go back', () => {
    cy.get('.score .back-button').click();
    cy.wait(200);
    cy.get('.main').should('be.visible');
    cy.get('.game').should('not.be.visible');
    cy.get('.score').should('not.be.visible');
  });
});