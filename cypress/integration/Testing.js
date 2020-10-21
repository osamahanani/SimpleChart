describe('Open Site', () => {
    it('test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Layouts').click()

    })
    it('inline Form', () => {
        cy.get('[placeholder="Jane Doe"]').type('Osa Mahanani')
        cy.get('[type="text"][placeholder="Email"]')
            .type('osamahananisihono@gmail.com')
        cy.contains('Remember me').first().click()
    });

    it('using the Grid', () => {
        cy.get('[data-cy="imputEmail1"]').type('osamahananisihono@gmail.com')
        cy.get('#inputPassword2').type('123')
        cy.contains('Option 1').click()

    });
    
    it('Basic Form', () => {
        cy.get('#exampleInputEmail1').type('osamahananisihono@gmail.com')
        cy.get('#exampleInputPassword1').type('123')
        cy.contains('Check me out').click()
    });

    it('Form without labels', () => {
        cy.get('[placeholder="Recipients"]').type('test')
        cy.get('[placeholder="Subject"]').type('cypress')
        cy.get('[placeholder="Message"]').type('test cypress')
    });

    it('Block Form', () => {
        cy.get('#inputFirstName').type('Osa')
        cy.get('#inputLastName').type('Mahanani')
        cy.get('#inputEmail').type('osamahananisihono@gmail.com')
        cy.contains('Website').type('https://github.com/osamahanani')
    });

    it('Horizontal Form', () => {
        cy.get('#inputEmail3').type('osamahananisihono@gmail.com')
        cy.get('#inputPassword3').type('123')
        cy.get('.custom-checkbox').last().click()
    });
})