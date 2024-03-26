export default class CreatePackagePage {
  get saveButton() {
    return cy.get('[data-testid=save-package-button]')
  }

  clickInstallStepButton() {
    cy.get('[data-testid=install-step-button]').click()
  }
  clickRebootStepButton() {
    cy.get('[data-testid=add-step-buttons-expand-arrow]').click()
    cy.get('[data-testid=reboot-step-button]').click()
  }

  clickAddPowershellStepButton() {
    cy.get('[data-testid=add-step-buttons-expand-arrow]').click()
    cy.get('[data-testid=powershell-step-button]').click()
  }

  get nameEntry() {
    return cy.get('[data-testid="name-entry"]')
  }

  get versionEntry() {
    return cy.get('[data-testid="version-entry"]')
  }

  get descriptionEntry() {
    return cy.get('[data-testid="description-entry"]')
  }

  get timeoutEntry() {
    return cy.get('[data-testid="timeout-entry"]')
  }

  get stepNameEntry() {
    return cy.get('[data-testid="step-name-entry"]')
  }

  get stepSuccessCodesEntry() {
    return cy.get('[data-testid="success-codes-entry"]')
  }

  get stepParametersEntry() {
    return cy.get('[data-testid="parameters-entry"]')
  }

  get powershellUpload() {
    return cy.contains('Import .ps1')
  }

  get installerUpload() {
    return cy.get('[data-testid="installer-upload"]')
  }

  additionalFileUpload() {
    return cy.get('[data-testid="attach-file"]')
  }

  fillPackageInfo(
    customPackageName: string,
    customPackageDescription: string,
    customPackageVersion: string,
    customPackageTimeout: string
  ) {
    this.nameEntry.click().clear().type(customPackageName)
    this.descriptionEntry.click().clear().type(customPackageDescription)
    this.versionEntry.click().clear().type(customPackageVersion)
    this.timeoutEntry.click().clear().type(customPackageTimeout)
  }

  createRebootStep(
      customName: string
    ) {
      this.clickRebootStepButton()
      this.stepNameEntry.click().clear().type(customName)
      cy.waitUntil(this.isDoneUploading)
    }

  createPackageStep(
    name: string,
    file: string,
    exitCodes: string,
    parameter: string,
    isPowershell?: boolean,
  ) {
    if (isPowershell) {
      this.clickAddPowershellStepButton()
    } else {
      this.clickInstallStepButton()
    }
    this.stepNameEntry.click().clear().type(name)
    this.stepParametersEntry.click().clear().type(parameter)
    this.stepSuccessCodesEntry.click().clear().type(exitCodes)
    if (isPowershell) {
      this.powershellUpload.selectFile(file, { force: true })
    } else {
      this.installerUpload.selectFile(file, { force: true })
    }
    this.additionalFileUpload().selectFile(
      './cypress/resources/additional-file.txt',
      { force: true }
    )
    cy.waitUntil(this.isDoneUploading)
  }

  isDoneUploading(): boolean {
    return Cypress.$('*[class^="MuiCircularProgress-svg"]').length < 1
  }
}
