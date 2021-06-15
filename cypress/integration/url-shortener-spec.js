describe('URL Shortener: Page Load', () => {

  const baseUrl = 'http://localhost:3000';

  before(() => {
    cy.fixture('mock-data.json')
      .then((data) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy.visit(baseUrl);
  })

  it('Should load the landing page with the correct URL', () => {
    cy.get('.App').should('be.visible')
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display header and page title', () => {
    cy.get('header').find('h1').should('contain', 'URL Shortener')
  })

  it('Should display form with expected inputs', () => {
    cy.get('header').find('h1').should('contain', 'URL Shortener')
  })

  it('Should display all existing URL elements', () => {
    
  })

})

describe('URL Shortener: Form Submission', () => {

  const baseUrl = 'http://localhost:3000';

  before(() => {
    cy.fixture('mock-data.json')
      .then((data) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy.fixture('mock-data.json')
      .then((data) => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy.visit(baseUrl);
  })


  it('', () => {

  })

  it('', () => {
    
  })

  it('', () => {
    
  })

})

describe('URL Shortener: Error Handling', () => {

  const baseUrl = 'http://localhost:3000';

  before(() => {
    cy.fixture('mock-data.json')
      .then((data) => {
        cy.intercept('GET', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy.fixture('mock-data.json')
      .then((data) => {
        cy.intercept('POST', 'http://localhost:3001/api/v1/urls', {
          statusCode: 200,
          body: data
        })
      })

    cy.visit(baseUrl);
  })


  it('', () => {

  })

  it('', () => {
    
  })

  it('', () => {
    
  })

})