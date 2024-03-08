import React from 'react'
import { Header } from './Header'

describe('<Header />', () => {
  it('renders', () => {
    cy.mount(<Header />);
  })

  it('should have title', () => {
    cy.mount(<Header />);
    cy.get('[data-testid=h1-title]').filter(':contains("NVA")').should('be.visible');
  })

  it('should have title', () => {
    cy.mount(<Header />);
    cy.get('[data-testid=header-button]').click();
    cy.get('[data-testid=header-button]').should('be.disabled');
  })
})