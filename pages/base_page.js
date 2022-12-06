// playwright-dev-page.js
const { expect } = require('@playwright/test');

exports.PlaywrightDevPage = class PlaywrightDevPage {

    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.getTab = page.locator('span.eos-badge > span', {hasText: 'Вкладка 7'});
        this.getText = page.locator('div.eos-tabs-tabpane:nth-child(7)');
    }

    async goto(url) {
        await this.page.goto(url);
    }

    async tab_click() {
        await this.getTab.click();
    }
}