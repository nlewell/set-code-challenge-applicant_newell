import DeployMenu from '../pages/deploy-menu.page'
import DevicesListPage from '../pages/devices-list.page'
import FilterModal from '../pages/filter-modal'
import DeviceInfo from '../utils/device-info'

const devicesListPage = new DevicesListPage()
const filterModal = new FilterModal()
describe('filter', () => {
  let deviceInfo: DeviceInfo

  before(() => {
    cy.loginAsTestUser()
  })

  beforeEach(() => {
    cy.loginAsTestUser()
    devicesListPage.load()
    cy.resetDemoData()
  })

  it('Can create a filter', () => {
    devicesListPage.openFilterModal()
    filterModal.fillTextFilter('0', 'Software', 'Name', 'contains', 'Fake Software 2')
    filterModal.applyFilter()
    cy.get('a').contains('Dummy Data 2')
    cy.get('a').contains('Dummy Data 1').should('not.exist');
    //TODO validate filter only shows the correct devices
  })

  it('Can save a group', () => {
    let groupName = 'Fake Software 2'
    devicesListPage.openFilterModal()
    filterModal.fillTextFilter('0', 'Software', 'Name', 'contains', 'Fake Software 2')
    filterModal.saveGroup(groupName)
    devicesListPage.getGroupTab(groupName)
    cy.get('a').contains('Dummy Data 2')
    cy.get('a').contains('Dummy Data 1').should('not.exist');
    //TODO validate saved group only shows the correct devices
  })
})
