describe('License plate store home page', () => {

    beforeEach(() => {
        cy.visit('/');
    });

    it('displays the right main title', () => {
        cy.contains('Welcome to our store').should('be.visible');
    });

    it('displays 8 license plates', () => {
        cy.get('app-license-plate').should('have.length', 8);
    });
});