describe('Switch window', () => {
    
    it('switch tab', async() => {

        await browser.navigateTo('https://www.amazon.in')
        await browser.newWindow('https://playwright.dev/')
        const windows = await browser.getWindowHandles()
        console.log(windows.length);
        await browser.switchWindow('Fast and reliable end-to-end testing for modern web apps | Playwright')
        //await browser.switchToWindow('Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in')
        await browser.back()
         await browser.pause(2000)
         await browser.forward()
         await browser.pause(2000)
         await browser.refresh()
         await browser.pause(2000)

        
       



        
    });
});