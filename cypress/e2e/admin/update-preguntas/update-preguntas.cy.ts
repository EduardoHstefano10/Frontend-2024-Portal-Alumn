describe('Admin Panel', () => {
    beforeEach(() => {
        cy.visit('http://localhost:4200');
    });

    it('Debe permitir actualizar una pregunta existente en un examen', () => {
        // Ingresar credenciales válidas
        cy.get('input[name="username"]').type('ehernandez');
        cy.get('input[name="password"]').type('123');
    
        // Enviar el formulario
        cy.get('button[type="submit"]').click();

        // Esperar redirección
        cy.url().should('include', '/admin');

        // Navegar a la página de exámenes
        cy.visit('http://localhost:4200/admin/examenes');

        // Esperar a que se cargue la lista de exámenes
        cy.contains('Examen de Historia Actualizado').should('be.visible');

        // Seleccionar el examen "Examen de Historia Actualizado" y hacer clic en el botón "Preguntas"
        cy.contains('Examen de Historia Actualizado').parents('mat-card').within(() => {
            cy.contains('Preguntas').should('be.visible').click();
        });

        // Seleccionar una pregunta específica para actualizar
        cy.contains('Preguntas').click();
        cy.contains('¿Cuál es la capital de España?').parents('mat-card').within(() => {
            cy.contains('Actualizar').should('be.visible').click();
        });

        // Esperar a que el formulario de edición de pregunta se cargue
        cy.get('form').should('be.visible');

        // Actualizar los datos de la pregunta
        cy.get('textarea[name="contenido"]').clear().type('¿Cuál es la capital de España?');
        cy.get('input[name="opcion1"]').clear().type('Madrid');
        cy.get('input[name="opcion2"]').clear().type('Barcelona');
        cy.get('input[name="opcion3"]').clear().type('Sevilla');
        cy.get('input[name="opcion4"]').clear().type('Valencia');

        // Seleccionar la nueva respuesta correcta
        cy.get('mat-select[name="respuesta"]').click().then(() => {
            cy.get('mat-option').contains('Madrid').click();
        });

        // Enviar el formulario de actualización
        cy.get('button[type="submit"]').click();

        // Esperar que aparezca el SweetAlert2 y hacer clic en el botón "OK"
        cy.get('button.swal2-confirm').should('be.visible').click();

//    // Verificar que la actualización de la pregunta fue exitosa
//    cy.contains('Pregunta actualizada exitosamente').should('be.visible');

   // Navegar de nuevo a la página de exámenes
        cy.visit('http://localhost:4200/admin/examenes');
    });
});
