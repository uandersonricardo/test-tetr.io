context('Login', () => {
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
  });

  it('should stay in the grid by left', () => {
    for (let i = 0; i < 50; i++) {
      cy.get('body').type('{leftarrow}');
    }

    cy.get('.grid > .grid-item').then(($gridItems) => {
      let startRow = -1;
      let endRow = -1;
      let startCol = -1;
      let endCol = -1;

      const grid = [];

      for (let i = 0; i < 16; i++) {
        grid[i] = [];
        for (let j = 0; j < 10; j++) {
          if ($gridItems[i * 10 + j].classList.contains("block")) {
            grid[i][j] = 1;
  
            if (startRow === -1) {
              startRow = i;
            }
  
            endRow = i;
  
            if (j < startCol || startCol === -1) {
              startCol = j;
            }
  
            if (j > endCol || endCol === -1) {
              endCol = j;
            }
          } else {
            grid[i][j] = 0;
          }
        }
      }

      expect(startCol).to.equal(0);
    });
  });
});