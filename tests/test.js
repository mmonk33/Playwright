const { test, expect } = require('@playwright/test');
const { TabPage } = require('../pages/tabs_page');
const { TimePicker } = require('../pages/timepicker');
const { TwinColumn } = require("../pages/twin_column");

test('Test 1. Tabs', async ({ page }) => {
    const Tabs_page = new TabPage(page);
    await Tabs_page.goto('http://89.189.152.235:1337/?path=/story/eos-tabs--default');
    await Tabs_page.tab7_click()
    await expect(Tabs_page.getText).toContainText('Текст 7');
});
test('Test 2. Timepicker', async ({ page }) => {
    const TimePickerPage = new TimePicker(page);
    await TimePickerPage.goto('http://89.189.152.235:1337/?path=/story/eos-timepicker--in-form')
    await TimePickerPage.drop_down_arrow_click()
    await TimePickerPage.pick_time_now()
    await TimePickerPage.submit()
    await expect(TimePickerPage.getMessage).toBeVisible()
    await expect(TimePickerPage.getSelectedTime.inputValue()).toHaveText(await TimePickerPage.current_time());
});
test('Test 3. Twincolumn', async ({ page }) => {
    const TwinColumnPage = new TwinColumn(page);
    await TwinColumnPage.goto('http://89.189.152.235:1337/?path=/story/eos-twincolumn--default')
    await TwinColumnPage.item_4_click()
    await expect(TwinColumnPage.getListItem4).toHaveClass(/eos-transfer-list-content-item-checked/)
    await TwinColumnPage.right_arrow_click()
    await expect(TwinColumnPage.getRightArrow).toHaveClass(/disabled/)
});