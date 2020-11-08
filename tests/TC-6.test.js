describe("TC-6 Checking button form elements", () => {
    beforeAll(async () => {
        await page.goto("https://getbootstrap.com/docs/4.4/components/buttons/#disabled-state");
        await page.waitForSelector(".navbar-brand");
    });

    test("There should be a button with text \"Primary button\"", async () => {
        const button = await page.$("'Primary button'");
        expect(button).toBeTruthy();
    });
    test("The primary button should be disabled", async () => {
        const button = await page.$("'Primary button'");
        const isDisabled = await page.evaluate(button => button.disabled, button);
        expect(isDisabled).toBe(true);
    });
    test("When the page is scrolled down 1 page, the active primary link button should not be disabled", async () => {
        await page.keyboard.press("PageDown");
        await page.waitForSelector(".btn-primary.active");
        const isDisabled = await page.$eval(".btn-primary.active", button => button.disabled);
        expect(isDisabled).toBeFalsy();
    });
});