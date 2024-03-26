import CreatePackagePage from '../pages/create-package-page'
import DeployMenu from '../pages/deploy-menu.page'
import DeviceDetailsPage from '../pages/device-details.page'
import DevicesListPage from '../pages/devices-list.page'
import NavBar from '../pages/nav-bar.page'
import PackagesPage from '../pages/packages-page'
import DeviceInfo from '../utils/device-info'
import { Connect } from 'support'

const connect = new Connect()

describe('Custom package install', () => {
  const customPackageName = 'test package installer 12345'
  const customPackageDescription = 'test package made in cypress tests'
  const customPackageVersion = '12'
  const customPackageTimeout = '1'
  before(() => {
    cy.loginAsTestUser()
  })

  beforeEach(() => {
    cy.loginAsTestUser()
    cy.visit('/')
  })

  it('Can create a custom package', () => {
     // create custom package
     connect.navBar.openPackages()
     connect.packagesPage.createPackageButton.click()
     connect.createPackagePage.fillPackageInfo(
       customPackageName,
       customPackageDescription,
       customPackageVersion,
       customPackageTimeout
     )
     connect.createPackagePage.createPackageStep(
       './cypress/resources/hello.exe',
       '420',
       '/S'
     )
     connect.createPackagePage.saveButton.click()
     connect.packagesPage.searchBox.click().type(customPackageName)
     connect.packagesPage.packagesGrid.contains(customPackageName).click()

  })

  it('Custom package saved correctly', () => {
    
    // TODO  open package again to verify it saved correctly
  })

  it('Can create a package with multiple steps', () => {
    // TODO
  })

})
