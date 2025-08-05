describe('popup', () => {
    
    it('alert popup', async() => {

        await browser.url('https://testautomationpractice.blogspot.com/')
        await browser.pause(2000)
        await browser.$('[id="confirmBtn"]').click()
        await browser.pause(2000)
        console.log(await browser.isAlertOpen());
        console.log( await browser.getAlertText());
        await browser.acceptAlert()
        await browser.pause(2000)

        
    });

    it.only('alert1',async()=>{
        await browser.url('https://demoapps.qspiders.com/ui/alert?sublist=0')
        await browser.$('//tbody[@class="w-full"]//tr[1]//td//input').click()
        await browser.pause(2000)
        let del = await browser.$('[id="deleteButton"]')
        await del.click()
        await browser.pause(2000)
       const text=  await browser.getAlertText()
       console.log(text);
       await browser.acceptAlert()

    })
});