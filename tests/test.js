// example.spec.js
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/base_page');

test('Test 1. Tabs', async ({ page }) => {
    const Tabs_page = new PlaywrightDevPage(page);
    await Tabs_page.goto('http://89.189.152.235:1337/?path=/story/eos-tabs--default');
    await Tabs_page.tab_click()
    await expect(Tabs_page.getText).toContainText('Текст 7');
});
test('Test 2. Timepicker', async ({ page }) => {
    await page.goto('http://89.189.152.235:1337/?path=/story/eos-timepicker--in-form');
    await page.frameLocator('#storybook-preview-iframe').getByRole('img').click();
    await page.frameLocator('#storybook-preview-iframe').getByText('Сейчас').click();
    await page.frameLocator('#storybook-preview-iframe').getByRole('button', { name: 'Submit' }).click();
    await page.frameLocator('#storybook-preview-iframe').getByRole('button', { name: 'Submit' }).click();
});
test('Test 3. Twincolumn', async ({ page }) => {
    await page.goto('http://89.189.152.235:1337/?path=/story/eos-twincolumn--default');
    await page.frameLocator('#storybook-preview-iframe').getByText('{4} Заголовок').click();
    await page.frameLocator('#storybook-preview-iframe').getByRole('button', { name: 'right' }).click();
});