const { BasePage } = require('../pages/base_page');
class TabPage extends BasePage{

    constructor(page) {
        super(page)
        this.getTab = page.frameLocator('#storybook-preview-iframe').locator('span.eos-badge > span', {hasText: 'Вкладка 7'});
        this.getText = page.frameLocator('#storybook-preview-iframe').locator('div.eos-tabs-tabpane:nth-child(7)');
    }

    async tab7_click() {
        await this.getTab.click();
    }
}

module.exports = {TabPage};