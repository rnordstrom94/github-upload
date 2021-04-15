describe('Invitation tests', () => {
    it('invites more than 20 members', () => {
      cy.get('a[href="/diaries/618/members"]').click()
      cy.url().should('include', '/diaries/618/members')
      cy.get('.membership_table').find('tr').should('have.length', 21)

      cy.get('#invitation_user_email').type('rn.unicustest+20@gmail.com')
      cy.get('input[type="submit"]').click()
      cy.contains('Användaren har lagts till i dagboken')
      cy.get('.membership_table').find('tr').should('have.length', 22)

      cy.get('#invitation_user_email').type('rn.unicustest+21@gmail.com')
      cy.get('input[type="submit"]').click()
      cy.contains('Användaren har lagts till i dagboken').should('not.exist')
      cy.get('.membership_table').find('tr').should('have.length', 22)
    })
  })
  