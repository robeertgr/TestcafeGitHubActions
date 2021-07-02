import { Selector, t } from "testcafe";

class RegisterPage{
    constructor(){
        this.GenderOption = Selector('#gender-male')
        this.FirstName = Selector('#FirstName')
        this.LastName = Selector('#LastName')
        this.DateofBirthDayList = Selector("select[name='DateOfBirthDay']")
        this.DateofBirthMonthList = Selector("select[name='DateOfBirthMonth']")
        this.DateofBirthYearList = Selector("select[name='DateOfBirthYear']")
        this.Email = Selector('#Email')
        this.Password = Selector('#Password')
        this.ConfirmPassword = Selector('#ConfirmPassword')
        this.RegisterButton = Selector('#register-button.button-1.register-next-step-button')
        this.SuccessfullMessage = Selector('body > div.master-wrapper-page > div.master-wrapper-content > div > div > div > div.page-body > div.result');//.withText('Your registration completed');
    }

    async selectDay(day){
        const DayOption = this.DateofBirthDayList.find('option');
        await t
            .click(this.DateofBirthDayList)
            .click(DayOption.withText(day))
    }

    async selectMonth(month){
        const DaysOption = this.DateofBirthMonthList.find('option');
        await t
            .click(this.DateofBirthMonthList)
            .click(DaysOption.withText(month));
    }

    async selectYear(year){
        const DaysOption = this.DateofBirthYearList.find('option');
        await t
            .click(this.DateofBirthYearList)
            .click(DaysOption.withText(year));
    }

}

export default new RegisterPage();