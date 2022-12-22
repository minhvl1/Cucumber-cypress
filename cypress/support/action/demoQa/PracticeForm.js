import PracticeFormUI from "../../interface/demoQa/PracticeFormUI";


const practiceFromUI = new PracticeFormUI()

class PracticeForm{
    getPracticeForm(){
        return practiceFromUI.getPracticeForm().click()
    }

    inputFirstName(firstName){
        return practiceFromUI.getFistNameTextbox().type(firstName)
    }

    inputLastName(lastName){
        return practiceFromUI.getLastNameTextbox().type(lastName)
    }

    selectGender(gender){
        return practiceFromUI.getGenderRadio(gender).click()
    }

    inputUserNumber(phoneNumber){
        return practiceFromUI.getUserNumberInput().type(phoneNumber)
    }

    selectState(state){
        return practiceFromUI.getStateInput().type(state+"{enter}")
    }

    selectCity(city){
        return practiceFromUI.getCityInput().type(city+"{enter}")
    }

    clickDateOfBirthTextbox(){
        return practiceFromUI.getDateOfBirthInput().click()
    }

    selectYearOfBirth(yearOfBirth){
        return practiceFromUI.getYearOfBirth().select(yearOfBirth)
    }

    selectMonthOfBirth(monthOfBirth){
        return practiceFromUI.getMonthOfBirth().select(monthOfBirth)
    }

    selectDayOfBirth(dayOfBirth){
        return practiceFromUI.getDayOfBirth(dayOfBirth)
    }

    clickSubmitButton(){
        return practiceFromUI.getButtonSubmit().click()
    }
}

export default PracticeForm
