describe('Diary entry tests', () => {
    it('makes a diary entry using Pictogram', () => {
      cy.contains('Gawr Gura').click({ force:true })
      cy.contains('Skriv i Dagboken').click()
      cy.get('.database-id-0').click()
      cy.get('#image_database_autocomplete_0').type('elektricitet')
        .wait(500)
        .type('{downarrow}')
        .type('{enter}')
      cy.get('#post_title').type('Entry made by Cypress')
      cy.get('.pml-btn').first().click()
      cy.get('.post').first().contains('Entry made by Cypress')
      cy.get('.post').first().find('img')
    })
  })
  