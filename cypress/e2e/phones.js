const cardSelector = '[data-testid=phone-card]'
const detailSelector = '[data-testid=phone-detail]'
const navbarSelector = '[data-testid=navbar-logo]'
describe('phones list', () => {
  it('can display phones', function() {
    cy.visit('/')
      .get(cardSelector)
      .first()
      .should('exist')
  })

  it('On card click redirects to detail view', () => {
    cy.visit('/')
      .get(cardSelector)
      .first()
      .click()
      .url().should('include', '/detail')
  })
})

describe('phone detail', () => {
  it('can display phone detail', function() {
    cy.visit('/detail/0')
      .get(detailSelector)
      .first()
      .should('exist')
  })

  it('On navbar logo click redirects to home and display cards', () => {
    cy.visit('/detail/0')
      .get(navbarSelector)
      .first()
      .click()
      .url().should('include', '/')
  })
})
