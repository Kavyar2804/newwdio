describe('Switch window', () => {
    
    it('switch tab', async() => {

        await browser.url('https://testautomationpractice.blogspot.com/')
        await browser.newWindow('')
        await browser.$('[id="Wikipedia1_wikipedia-search-input"]').setValue('webdriver')
        await browser.$('.wikipedia-search-button').click()
        await browser.$('//a[.="WebDriver"]').click()
        const handles= await browser.getWindowHandles()
        console.log(handles.length);
        
        await browser.pause(2000)
        await browser.switchToWindow(handles[1])
        console.log(  await browser.getTitle());
        await browser.$('(//a//span[.="Create account"])[1]').click()
       await browser.pause(2000)



        
    });
});