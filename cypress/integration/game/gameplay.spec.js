context('Login', () => {
  beforeEach(() => {
    cy.visit('https://uandersonricardo.github.io/tetr.io/');
    cy.get('.main > .play-button').click();
    cy.wait(200);
    cy.get('.swal2-input').type("Jogador");
    cy.get('.swal2-confirm').click();
    cy.wait(200);
  });

  it('should rotate tetromino', () => {
    for (let i = 0; i < 5; i++) {
      cy.get('body').type('{downarrow}');
    }

    cy.wait(200);
    
    let t1 = [];
    
    cy.get('.grid > .grid-item').then(($gridItems) => {
      let startRow = -1;
      let endRow = -1;
      let startCol = -1;
      let endCol = -1;

      const grid = [];

      for (let j = 0; j < 10; j++) {
        grid[j] = [];
        for (let i = 0; i < 16; i++) {
          if ($gridItems[i * 10 + j].classList.contains("block")) {
            grid[j][15 - i] = 1;
  
            if (startRow === -1) {
              startRow = j;
            }
  
            endRow = j;
  
            if (15 - i < startCol || startCol === -1) {
              startCol = 15 - i;
            }
  
            if (15 - i > endCol || endCol === -1) {
              endCol = 15 - i;
            }
          } else {
            grid[j][15 - i] = 0;
          }
        }
      }
  
      for (let i = startRow; i < endRow + 1; i++) {
        t1[i - startRow] = grid[i].slice(startCol, endCol + 1);
      }
    });

    cy.get('body').type('{uparrow}');

    cy.get('.grid > .grid-item').then(($gridItems) => {
      let t2 = [];
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
  
      for (let i = startRow; i < endRow + 1; i++) {
        t2[i - startRow] = grid[i].slice(startCol, endCol + 1);
      }

      expect(t2).to.deep.equal(t1);
    });
  });
});