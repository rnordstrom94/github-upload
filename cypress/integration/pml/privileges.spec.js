describe('Privilege tests', () => {
    it('changes privileges for a user', () => {
        cy.get('a[href="/diaries/618/members"]').click()
        cy.url().should('include', '/diaries/618/members')

        cy.get('.invite-page-buttons').first().click()
        cy.get('#diary_membership_diary_role').select('Maxi Plus (vårdnadshavare/god man)')
        cy.get('input[type="submit"]').click()
        cy.get('.membership_table')
            .find('tr:nth-child(3)')
            .contains('Maxi Plus')
    })
  })