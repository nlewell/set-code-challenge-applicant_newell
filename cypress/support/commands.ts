    // ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-wait-until';

import DeviceDetailsPage from '../pages/device-details.page'
import DevicesListPage from '../pages/devices-list.page'
import { aliasQuery, hasOperationName } from '../utils/graphql-test-utils'


const devicesListPage = new DevicesListPage()
const deviceDetailsPage = new DeviceDetailsPage()
const defaultUser = 'default'


Cypress.Commands.add('loginAsTestUser', (userKey: string = defaultUser) => {
  Cypress.log({
    name: 'loginAsTestUser',
    displayName: 'login',
    message: `starting login as test user`,
  })
  cy.session(userKey, () => {
    // TODO login as test user
    cy.visit('/')
    cy.get('#username').type('newell@qatestpdq.com')
    cy.get('#password').type('Dydwahfos2024!')
    cy.get('[data-action-button-primary="true"]').click()
  
    // a cookie for _houston_key is set
    // when the user logs in
  })
})

Cypress.Commands.add('resetDemoData', () => {
  Cypress.log({
    name: 'resetDemoData',
    displayName: 'reset',
    message: `resetting demo data for current org`,
  })
  cy.visit('/')
  cy.get('[data-testid="ExpandMoreIcon"]').click()
  cy.contains('Reset demo data').click()
  cy.contains('Reset fixed demo data').click()
  cy.get('[data-testid="ExpandMoreIcon"]').click()
})

Cypress.Commands.add('getFirstDevice', () => {
  cy.intercept('POST', '/v1/graphql', (req) => {
    aliasQuery(req, 'Devices')
  })
  devicesListPage.load()
  return cy.wait('@gqlDevicesQuery').then((x) => {
    console.log(x.response)
    return x.response.body.data.devices.edges[0].node
  })
})
