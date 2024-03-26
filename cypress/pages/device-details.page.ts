class DeviceDetailsPage {
  getName() {
    return cy.get('[data-test-id=device-name]')
  }

  getLastCheckin() {
    return cy.get('[data-test-id=device-last-checkin]')
  }

  get deploymentsTab() {
    return cy.get('[data-testid="deployments-tab"]')
  }
}

export default DeviceDetailsPage
