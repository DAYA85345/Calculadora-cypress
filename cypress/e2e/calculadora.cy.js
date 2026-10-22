describe('Pruebas E2E de la Calculadora', () => {
  beforeEach(() => {
    // Abre la calculadora antes de cada prueba
    cy.visit('Calculadora.html');
  });

  it('Debe realizar una suma correctamente (7 + 8 = 15)', () => {
    // 1. Simula los clics en los botones
    cy.contains('button', '7').click();
    cy.contains('button', '+').click();
    cy.contains('button', '8').click();
    cy.contains('button', '=').click();

    // 2. Verifica que el <div id="current-operand"> contenga el valor 15
    cy.get('#current-operand').should('have.text', '15');
  });

  it('Debe limpiar la pantalla con el botón AC', () => {
    cy.contains('button', '9').click();
    cy.contains('button', 'AC').click();
    cy.get('#current-operand').should('have.text', '0');
  });
});