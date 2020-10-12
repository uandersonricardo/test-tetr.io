context('Scoreboard', () => {
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

  it('should update score text', () => {
    cy.get('.score-text').should('have.text', 'Você fez 0 pontos!');
  });

  it('should update scoreboard', () => {
    cy.get('td').should(($tds) => {
      expect($tds.eq(0)).to.contain('1');
      expect($tds.eq(1)).to.contain('Jogador');
      expect($tds.eq(2)).to.contain('0');
    });
  });
});