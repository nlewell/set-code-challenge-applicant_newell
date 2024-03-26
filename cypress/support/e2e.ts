import './commands'


// Alternatively you can use CommonJS syntax:
// require('./commands')
declare global {
  namespace Cypress {
    interface Chainable {
      /**
       * Custom command to select DOM element by data-cy attribute.
       * @example cy.dataCy('greeting')
       */
      loginAsTestUser(userKey?: string): Chainable<Response<any>>
      resetDemoData(): Chainable<Response<any>>
      getFirstDevice(): Chainable<any>
    }
  }
}
