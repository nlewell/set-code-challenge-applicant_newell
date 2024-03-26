# Homework

Part 1: Cypress 

1. Clone the repository 
2. Implement (or fix!) the tests and commands found in `./cypress` 
3. Make a fork of the repo and submit your changes by emailing Jenna a link to your fork

Part 2: Algo Challenge
1. Visit: 
  `https://codesandbox.io/s/applicant-version-set-algo-challenge-qzpgs`
2. Fork the sandbox
3. Follow the directions to complete the task. 
4. Submit your version by emailing Jenna a link to your fork


## Installation

- [Node 18.0.0+ (LTS)](https://nodejs.org/)
- [git](https://git-scm.com)

Once you have the requirements, install the deps by running install in the root directory.

```bash
npm install
```
### Quick check ✅

You can test the application with at new user in a test environment:
1. Navigate to https://houston-staging.pdq.tools/login?company_name=your_cool_company_name
    + You must provide your own unique company name in the above url. Please replace your_cool_company_name with another name.
2. Create a new account with any email address that ends in @qatestpdq.com
    + Example iamjohn@qatestpdq.com
3. Expand the red drawer to reset demo data
4. Use this account to complete  `Part 1: Cypress `

## Running Cypress 

You can open the Cypress Test Runner gui using:

```bash
$ npx cypress open
```

```bash
$ npx cypress run
```