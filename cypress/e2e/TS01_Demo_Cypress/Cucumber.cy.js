import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";




Given("I navigate to automation exercise website",  ()=> {
    cy.SearchinGoogle("minh")

    });
When("I enter login credentials", ()=> {
    cy.url().should('contains','https://www.google.com.vn/search?q=minh&hl')
    });
Then("I should be logged in", ()=> {
    cy.log('done')
    });

