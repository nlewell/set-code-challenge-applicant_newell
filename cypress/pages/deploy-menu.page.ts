class DeployMenu {
  selectFirstPackage() {
    cy.get('.MuiAutocomplete-popper li[data-option-index="0"]').click({
      force: true,
    })
  }

  selectPackageVersion(version: string, packageNameIndex: number = 0) {
    if (Cypress.$('[aria-label="Selected version"]').length > 0) {
      cy.get('[aria-label="Selected version"]')
        .eq(packageNameIndex)
        .parent()
        .click()
        .get('ul > li')
        .contains(new RegExp(version + '(?<!\\.)$')) //filter out similar versions that have a period before more version info ie 21.00 is not a match for 21.00.1
        .click()
    }
  }

  deploy(packageInfos: PackageInfo[]) {
    let i = 0
    packageInfos.forEach((packageInfo) => {
      cy.get('[data-testid="package-search-autocomplete"')
        .click()
        .type(packageInfo.name)
      this.selectFirstPackage()
      this.selectPackageVersion(packageInfo.version, i++)
    })
    cy.get('[data-test-id="deploy-selected-packages-button"]').click()
  }
}
export type PackageInfo = {
  name: string
  version: string
}
export default DeployMenu
