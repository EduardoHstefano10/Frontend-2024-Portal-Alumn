/// <reference types="cypress" />

describe('Formulario de Registro y Login', () => {


    before(() => {
        // Navegar a la página de registro antes de comenzar las pruebas
        cy.visit('http://localhost:4200/signup');
    });

   

    it('Debería permitir registrar un nuevo usuario', () => {
        // Llenar los campos del formulario
        cy.get('input[name="username"]').type('dcelestino');
        cy.get('input[name="password"]').type( '123');
        cy.get('input[name="nombre"]').type('Daniel');
        cy.get('input[name="apellido"]').type('Celestino');
        cy.get('input[name="email"]').type('foquitafarfan@gmail.com');
        cy.get('input[name="telefono"]').type('123');

     
          // Enviar el formulario
          cy.get('button[type="submit"]').click();

          // Esperar
          cy.wait(2000);
  

    
          // Capturar un screenshot
          cy.screenshot('Credenciales-válidas');
    });

    // it('Debería permitir limpiar el formulario', () => {
    //     // Llenar los campos del formulario
    //     cy.get('input[name="username"]').type('dcelestino');
    //     cy.get('input[name="password"]').type( '123');
    //     cy.get('input[name="nombre"]').type('Daniel');
    //     cy.get('input[name="apellido"]').type('Celestino');
    //     cy.get('input[name="email"]').type('foquitafarfan@gmail.com');
    //     cy.get('input[name="telefono"]').type('123');

    //     // Limpiar el formulario
    //     cy.contains('Limpiar').click();

    //     // Verificar que los campos están vacíos
    //     cy.get('input[name="username"]').should('have.value', '');
    //     cy.get('input[name="password"]').should('have.value', '');
    //     cy.get('input[name="nombre"]').should('have.value', '');
    //     cy.get('input[name="apellido"]').should('have.value', '');
    //     cy.get('input[name="email"]').should('have.value', '');
    //     cy.get('input[name="telefono"]').should('have.value', '');
    // });

    describe('Login', () => {
        beforeEach(() => {
            // Navegar a la página de login antes de cada prueba
            cy.visit('http://localhost:4200');
        });

        it('Debería permitir iniciar sesión con credenciales válidas', () => {
            // Ingresar credenciales válidas
            cy.get('input[name="username"]').type('dcelestino');
            cy.get('input[name="password"]').type( '123');

            // Enviar el formulario
            cy.get('button[type="submit"]').click();

            // Aserción para verificar el inicio de sesión exitoso
            cy.url().should('include', '/user-dashboard/0');
        });
    });
});
