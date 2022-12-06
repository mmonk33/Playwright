// example.spec.js
const { test, expect } = require('@playwright/test');
const { PlaywrightDevPage } = require('../pages/base_page');

test('Test 1. Tabs', async ({ page }) => {
    const Tabs_page = new PlaywrightDevPage(page);
    await Tabs_page.goto('http://89.189.152.235:1337/?path=/story/eos-tabs--default');
    await expect(playwrightDev.tocList).toHaveText([]);
});

test('Test 2. Timepicker', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

test('Test 3. Timepicker', async ({ page }) => {
    const playwrightDev = new PlaywrightDevPage(page);
    await playwrightDev.goto();
    await playwrightDev.pageObjectModel();
    await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});