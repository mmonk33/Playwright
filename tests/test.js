// example.spec.js
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/base_page');

test('Test 1. Tabs', async ({ page }) => {
    const Tabs_page = new PlaywrightDevPage(page);
    await Tabs_page.goto('http://89.189.152.235:1337/?path=/story/eos-tabs--default');
    await page.frameLocator('#storybook-preview-iframe').getByText('Вкладка 7').click();
    await expect(page.frameLocator('#storybook-preview-iframe').getByText('Текст 7')).toContainText('Текст 7');
});