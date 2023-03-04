/// <reference types="Cypress" />
import config from './config.json'
describe("Weather API",() =>{

    it("Get the weather details of a city - London", ()=>{
        cy.request({
            method:"GET",
            url : `${config.wheatherApi_baseurl}` ,
            qs:{
                q : 'London',
                appid :`${config.app_id}`
            }
        }).as('getapi')
        .then((response)=>{
            expect(response.status).to.equal(200);
            expect(response.body).to.have.property("weather");
            cy.get('@getapi').then((response) => {
                cy.log(JSON.stringify(response.body))
            })
            cy.log(response.body.main.temp)
            cy.log(response.body.wind.speed)


    })
    
})

it("Get the weather details of a city - Negative Test scenario", ()=>{
    cy.request({
        method:"GET",
        url : `${config.wheatherApi_baseurl}` ,
        qs:{
            q : 'null',
            appid :`${config.app_id}`
        },
        failOnStatusCode: false,
    }).as('apitest')
    cy.get('@apitest').its('status').should('equal', 404)


})


})