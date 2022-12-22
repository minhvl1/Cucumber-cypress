import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor";
import HomePageQa from "../../support/action/demoQa/HomePageQa";
import PracticeForm from "../../support/action/demoQa/PracticeForm";

const homePageQa = new HomePageQa()
const practiceForm = new PracticeForm()
        Cypress.on('uncaught:exception', (err, runnable) => {
                return false;
        });

        Given("go to practice page", function () {
                cy.viewport(1920,1080)
                cy.visit("https://demoqa.com",{failOnStatusCode:false})
        });

        Given(/^Open Practice from$/, function () {
                homePageQa.goToPracticePage()
                practiceForm.getPracticeForm()
        });

        When(/^Input firstname (.*)$/, function (firstName) {
                practiceForm.inputFirstName(firstName)
        });
        When(/^Input lastname (.*)$/, function (lastName) {
               practiceForm.inputLastName(lastName)
        });

        When(/^Select gender (.*)$/, function (gender) {
                practiceForm.selectGender(gender)
        });

        When(/^Input userNumber(.*)$/, function (userNumber) {
                practiceForm.inputUserNumber(userNumber)
        });
        When(/^Select YOB (.*)$/, function (YOB) {
                practiceForm.clickDateOfBirthTextbox()
                practiceForm.selectYearOfBirth(YOB)
        });
        When(/^Select MOB (.*)$/, function (MOB) {
               practiceForm.selectMonthOfBirth(MOB)
        });
        When(/^Select DOB (.*)$/, function (DOB) {
                practiceForm.selectDayOfBirth(DOB)
        });
        When(/^Select state (.*)$/, function (state) {
                 practiceForm.selectState(state)
        });
        When(/^Select city (.*)$/, function (city) {
                practiceForm.selectCity(city)
        });
        Then(/^Submit form$/, function () {
                cy.xpath("//button[@id='submit']").click()
        });
        Then(/^Verify result form$/, function () {

        });



