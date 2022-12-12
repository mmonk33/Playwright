const {BasePage} = require("./base_page");

class TimePicker extends BasePage{

    constructor(page) {
        super(page)
        this.getDropDownListArrow = page.frameLocator('#storybook-preview-iframe').locator('svg');
        this.getTimeNow = page.frameLocator('#storybook-preview-iframe').locator('.eos-picker-now-btn');
        this.ButtonSubmit = page.frameLocator('#storybook-preview-iframe').getByRole('button', { name: 'Submit' });
        this.getMessage = page.frameLocator('#storybook-preview-iframe').locator('span.eos-message__content');
        this.getSelectedTime = page.frameLocator('#storybook-preview-iframe').locator('input#basic_timepicker')
    }
    async goto(url) {
        await this.page.goto(url);
    }

    async drop_down_arrow_click() {
        await this.getDropDownListArrow.click();
    }
    async pick_time_now() {
        await this.getTimeNow.click();
    }
    async submit() {
        await this.ButtonSubmit.click();
    }
    async current_time() {
        const today = new Date();
        let currentHours;
        currentHours = today.getHours();
        currentHours = ("0" + currentHours).slice(-2);
        return currentHours + ":" + today.getMinutes();
    }
}

module.exports = {TimePicker};