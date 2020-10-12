context('Volume', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-input').type("Jogador");
    cy.get('.swal2-confirm').click();
    cy.wait(200);
  });

  it('should change volume', () => {
    cy.get('.range').invoke('val', 0).trigger('change');
    cy.get('#sound').should('have.prop', 'volume').and('eq', 0);
    cy.wait(500);
    
    cy.get('.range').invoke('val', 20).trigger('change');
    cy.get('#sound').should('have.prop', 'volume').and('eq', 0.2);
    cy.wait(500);

    cy.get('.range').invoke('val', 67).trigger('change');
    cy.get('#sound').should('have.prop', 'volume').and('eq', 0.67);
    cy.wait(500);

    cy.get('.range').invoke('val', 100).trigger('change');
    cy.get('#sound').should('have.prop', 'volume').and('eq', 1);
    cy.wait(500);
  });
});