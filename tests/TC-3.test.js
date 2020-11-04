/* eslint-disable no-undef */
const { isInViewport } = require("../support/PlaywrightUtils");

describe("TC-3 Checking form elements", () => {
    beforeAll(async () => {
        await page.goto("https://getbootstrap.com/docs/4.4/components/forms");
        await page.waitForSelector(".navbar-brand");
    });
    test("The title of the browser should be \"Forms · Bootstrap\"", async () => {
        expect((await page.title())).toBe("Forms · Bootstrap");
    });
    test("The readonly input should not be in the viewport", async () => {
        const input = await page.$eval("input[readonly]", isInViewport);
        expect(!!input).toBe(false);
    });
    test("When The readonly input is scrolled into the viewport, it should be in the viewport", async () => {
        const input = await page.waitForSelector("input[readonly]");
        await input.scrollIntoViewIfNeeded();
        expect(!!await input.evaluate(isInViewport)).toBe(true);
    });
});