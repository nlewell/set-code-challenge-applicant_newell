export default class PackagesPage {
  get clickOnPackages() {
    return cy.get('[data-testid="AppsIcon"]')
  }
  get createPackageButton() {
    return cy.get('[data-testid="create-package-button"]')
  }
    get clickOnCustomPackage() {
      return cy.get('a').contains('test package installer 12345')
    }
  get searchBox() {
    return cy.get('[data-testid="package-search-entry"]')
  }
  get packagesGrid() {
    return cy.get('.MuiDataGrid-root')
  }
}
