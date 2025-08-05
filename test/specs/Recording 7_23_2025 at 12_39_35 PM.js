describe("Recording 7/23/2025 at 12:39:35 PM", () => {
  it("tests Recording 7/23/2025 at 12:39:35 PM", async () => {
    await browser.setWindowSize(1351, 362)
    await browser.url("https://webdriver.io/docs/record/")
    await expect(browser).toHaveUrl("https://webdriver.io/docs/record/")
    await browser.url("https://www.google.com/search?q=playwright+documentation&rlz=1C1CHBD_enIN1066IN1066&oq=pla&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGEEyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDkyBggDEEUYPDIGCAQQRRg9MgYIBRBFGEEyBggGEEUYQTIGCAcQRRg80gEINzM5NmowajSoAgiwAgHxBWho6vovb-yj&sourceid=chrome&ie=UTF-8")
    await expect(browser).toHaveUrl("https://www.google.com/search?q=playwright+documentation&rlz=1C1CHBD_enIN1066IN1066&oq=pla&gs_lcrp=EgZjaHJvbWUqDggBEEUYJxg7GIAEGIoFMgYIABBFGEEyDggBEEUYJxg7GIAEGIoFMgYIAhBFGDkyBggDEEUYPDIGCAQQRRg9MgYIBRBFGEEyBggGEEUYQTIGCAcQRRg80gEINzM5NmowajSoAgiwAgHxBWho6vovb-yj&sourceid=chrome&ie=UTF-8")
    await browser.$("aria/Playwright: Fast and reliable end-to-end testing for modern web apps").click()
    await expect(browser).toHaveUrl("https://playwright.dev/")
    await browser.$("//*[@id=\"__docusaurus\"]/nav/div[1]/div[2]/div[2]/button/span[1]/span").click()
    await browser.$("#docsearch-input").setValue("pop")
    await browser.$("//*[@id=\"docsearch-hits0-item-0\"]/a/div/div[2]/span[1]").click()
  });
});
