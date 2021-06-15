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

  it('Should display form with expected elements', () => {
    cy.get('form').find('input').eq(0).should('have.attr', 'placeholder', 'Title...')
    cy.get('form').find('input').eq(1).should('have.attr', 'placeholder', 'URL to Shorten...')
    cy.get('form').find('input[type=text]').should('have.length', 2)
    cy.get('form').find('button').should('contain', 'Shorten Please!')
  })

  it ('Should display text typed into form inputs', () => {
    cy.get('form').find('input[type=text]').eq(0)
      .type('some title text')
    cy.get('form input').eq(0).should('have.attr', 'value', 'some title text')

    cy.get('form').find('input[type=text]').eq(1)
      .type('some url text')
    cy.get('form input').eq(1).should('have.attr', 'value', 'some url text')
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