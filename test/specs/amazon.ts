describe('Amazon script', () => {
    it('search& add product to cart', async() => {

    await browser.url('https://www.amazon.in')
    await browser.maximizeWindow()
    await browser.$("//input[@id='twotabsearchtextbox']").setValue('kids toy laptop')
    await browser.$("//div[@id='sac-suggestion-row-1']").click()
    await browser.pause(2000)
    await browser.$('//a[@aria-label="Apply the filter 1 - 2 years to narrow results"]//i[@class="a-icon a-icon-checkbox"]').click()
    await browser.pause(1000)
    await browser.$("//div[@role='listitem']//span[contains(.,'Fun Express Educational Laptop Computer Toy for Kids Above 3 Years')])").click()
    await browser.pause(2000)
    });
    
});
