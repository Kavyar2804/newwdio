describe('frame', () => {
    
    it('handle frame', async() => {

        await browser.url('https://demoapps.qspiders.com/ui/frames?sublist=0')
        await browser.switchFrame($('[class="w-full h-96"]'))
        await browser.$('[id="username"]').setValue('abc')
        await browser.$('[id="password"]').setValue('123456')
        await browser.pause(2000)
        await browser.switchFrame(null)
        await browser.$('//a[.="Nested iframe"]').click()
        await browser.pause(2000)
    });
    
});