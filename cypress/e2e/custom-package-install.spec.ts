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
  const customPackageName = 'test package installer 123456'
  const customPackageDescription = 'test package made in cypress tests'
  const customPackageVersion = '12'
  const customPackageTimeout = '1'
  const time = new Date(Date.now());
  let packageUniqueName = 'test package installer 123456' + time;
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
        'step 1',
       './cypress/resources/hello.exe',
       '420',
       '/S'
     )
     connect.createPackagePage.saveButton.click()
     connect.packagesPage.searchBox.click().type(packageUniqueName)
     connect.packagesPage.packagesGrid.contains(packageUniqueName).click()
  })

  it('Custom package saved correctly', () => {
        connect.navBar.openPackages()
        connect.packagesPage.clickOnPackages.click()
        connect.packagesPage.searchBox.click().type(customPackageName)
        connect.packagesPage.packagesGrid.contains(customPackageName).click()
    // TODO  open package again to verify it saved correctly
  })

  it('Can create a package with multiple steps', () => {
        connect.navBar.openPackages()
         connect.packagesPage.createPackageButton.click()
         connect.createPackagePage.fillPackageInfo(
           packageUniqueName,
           customPackageDescription,
           customPackageVersion,
           customPackageTimeout
         )
          connect.createPackagePage.createPackageStep(
             'step 1',
            './cypress/resources/hello.exe',
            '420',
            '/S'
          )
          connect.createPackagePage.createPackageStep(
                       'step 2',
                      './cypress/resources/hello-world.ps1',
                      '420',
                      '/S',
                      true
                    )
         connect.createPackagePage.createRebootStep(
                     'step 3'
                  )
         connect.createPackagePage.saveButton.click()
         connect.packagesPage.searchBox.click().type(packageUniqueName)
         connect.packagesPage.packagesGrid.contains(packageUniqueName).click()
  })

})
