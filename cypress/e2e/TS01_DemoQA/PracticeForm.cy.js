import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
        Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
        });

        Given("go to practice page", function () {
                cy.viewport(1920,1080)
                cy.visit("https://demoqa.com",{failOnStatusCode:false})
        });

        Given(/^Open Practice from$/, function () {
                cy.xpath("//div[@class='card mt-4 top-card'][2]").click()
                cy.xpath("//div[@class='element-list collapse show']").click()
        });

        When(/^Input firstname (.*)$/, function (firstName) {
                cy.xpath("//input[@id='firstName']").type(firstName)
        });
        When(/^Input lastname (.*)$/, function (lastName) {
                cy.xpath("//input[@id='lastName']").type(lastName)
        });

        When(/^Select gender (.*)$/, function (gender) {
                switch (gender.toLowerCase()){
                        case "male":
                                return cy.xpath("//label[@for='gender-radio-1']").click()
                                break

                        case "female":
                                return cy.xpath("//label[@for='gender-radio-2']").click()
                                break

                        case "other":
                                return cy.xpath("//label[@for='gender-radio-3']").click()
                                break
                }
        });

        When(/^Input userNumber(.*)$/, function (userNumber) {
                cy.xpath("//input[@id='userNumber']").type(userNumber)
        });
        When(/^Select YOB (.*)$/, function (YOB) {
                cy.xpath("//input[@id='dateOfBirthInput']").click()
                cy.xpath("//select[@class='react-datepicker__year-select']").select(YOB)
        });
        When(/^Select MOB (.*)$/, function (MOB) {
                cy.xpath("//select[@class='react-datepicker__month-select']").select(MOB)
        });
        When(/^Select DOB (.*)$/, function (DOB) {
                cy.xpath("//div[@class='react-datepicker__day react-datepicker__day--0"+DOB+"']").click()
        });
        When(/^Select state (.*)$/, function (state) {
                 cy.xpath("//div[@class=' css-yk16xz-control']").type(state+'{enter}')
        });
        When(/^Select city (.*)$/, function (city) {
                cy.xpath("(//div[@class=' css-1hwfws3'])[2]").type(city+'{enter}')
        });
        Then(/^Submit form$/, function () {
                cy.xpath("//button[@id='submit']").click()
        });
        Then(/^Verify result form$/, function () {

        });



