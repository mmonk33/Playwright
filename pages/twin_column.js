const {BasePage} = require("./base_page");

class TwinColumn extends BasePage{

    constructor(page) {
        super(page)
        this.getListItem4 = page.frameLocator('#storybook-preview-iframe').locator('.eos-transfer-list-content-item', {hasText: '{4}'});
        this.getRightArrow = page.frameLocator('#storybook-preview-iframe').locator('.anticon.anticon-right')
    }
    async goto(url) {
        await this.page.goto(url);
    }

    async item_4_click() {
        await this.getListItem4.click();
    }
    async right_arrow_click() {
        await this.getRightArrow.click();
    }
}

module.exports = {TwinColumn};