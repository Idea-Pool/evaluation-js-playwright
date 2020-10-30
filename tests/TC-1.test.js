describe("TC-1", () => {
    beforeAll(async () => {
        await page.goto("https://angular.io");
        await page.waitForSelector(".nav-link.home > img");
        jest.setTimeout(60);
    });
    test("Angular logo in the top navbar should be visible", async () => {
        const logo = await page.waitForSelector(".nav-link.home > img"); 
        expect(logo).not.toBe(null);
    });
    test("Angular logo in the hero section should be visible", async () => {
        const logo = await page.waitForSelector(".hero-logo > img");
        expect(logo).not.toBe(null);
    });
    test("Text in hero section should be \"One framework. Mobile & desktop.\"", async () => {
        const heroSection = await page.textContent(".hero-headline");
        expect(heroSection).toBe("One framework.Mobile & desktop.");
    });
    test("Get started button should be visible in the hero section", async () => {
        const button = await page.waitForSelector(".button.hero-cta");
        expect(button).not.toBe(null);
    });
    test("When Get started button is clicked in the hero section, the URL should be https://angular.io/docs", async () => {
        const button = await page.waitForSelector(".button.hero-cta");
        await button.click();
        await page.waitForSelector(".nav-link.home > img");
        expect(page.url()).toBe("https://angular.io/docs");
    });
})