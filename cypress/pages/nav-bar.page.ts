export default class NavBar {
  openDevicesList() {
    cy.get('[data-testid="MonitorIcon"]').click()
  }
  openPackages() {
    cy.get('[data-testid="AppsIcon"]').click()
  }
}
