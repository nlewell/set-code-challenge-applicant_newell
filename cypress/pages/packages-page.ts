export default class PackagesPage {
  get createPackageButton() {
    return cy.get('[data-testid="create-package-button"]')
  }
  get searchBox() {
    return cy.get('[data-testid="package-search-entry"]')
  }
  get packagesGrid() {
    return cy.get('.MuiDataGrid-root')
  }
}
