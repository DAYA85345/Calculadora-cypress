describe('Pruebas E2E de la Calculadora', () => {

  beforeEach(() => {
    cy.visit('Calculadora.html');
  });

  // 1. RESTA
  it('Debe realizar una resta correctamente (9 - 4 = 5)', () => {
    cy.contains('button', '9').click();
    cy.contains('button', '-').click();
    cy.contains('button', '4').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '5');
  });

  // 2. MULTIPLICACIÓN
  it('Debe realizar una multiplicación correctamente (6 * 7 = 42)', () => {
    cy.contains('button', '6').click();
    cy.contains('button', '×').click();
    cy.contains('button', '7').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '42');
  });

  // 3. DIVISIÓN
  it('Debe realizar una división correctamente (8 / 2 = 4)', () => {
    cy.contains('button', '8').click();
    cy.contains('button', '÷').click();
    cy.contains('button', '2').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '4');
  });

  // 4. BORRAR UN DÍGITO (DEL)
  it('Debe borrar un solo dígito correctamente', () => {
    cy.contains('button', '1').click();
    cy.contains('button', '2').click();
    cy.contains('button', '3').click();
    
    cy.contains('button', 'DEL').click();

    cy.get('#current-operand').should('have.text', '12');
  });

  // 5. TRABAJO INDIVIDUAL: MULTIPLICACIÓN DE DOS DÍGITOS
  it('Debe realizar la multiplicación de 5 * 5 correctamente', () => {
    cy.contains('button', '5').click();
    cy.contains('button', '×').click();
    cy.contains('button', '5').click();
    cy.contains('button', '=').click();

    cy.get('#current-operand').should('have.text', '25');
  });

});