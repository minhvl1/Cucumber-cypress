import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";


Given("go to Bing",  ()=> {
    cy.visit('https://www.bing.com/')

});
When("search minh", ()=>  {
    cy.xpath("//input[@class='sb_form_q']")
        .type("minh")
        .type('{enter}')
});
Then("verify url contain minh", ()=>  {

});
