/// <reference types="Cypress" />
import config from './config.json'
import { faker } from '@faker-js/faker'
describe("Post API",() =>{
    it('API - POST Request', () => {
        cy.request({
            method: 'POST',
            url: `${config.post_url}`,
            body: {'name':'sha',
            'salary':'23000',
            'age':'23'
        }
        }).as('details')
        //Validate status code
        cy.get('@details').its('status').should('eq', 200)
        cy.get('@details').then((response) => {
            cy.log(JSON.stringify(response.body))
        })
           
    })

});