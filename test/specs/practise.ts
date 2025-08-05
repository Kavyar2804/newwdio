describe('blog scripts', () => {

    it('blog sihnup', async() => {
      await browser.url("https://testautomationpractice.blogspot.com/");
      await browser.maximizeWindow()
      //assertion
      await expect(browser).toHaveUrl('https://testautomationpractice.blogspot.com/')

      //send data to text feild
      await browser.$('#name').setValue("bindu");
      //radio
      await browser.$('#female').click() 
       //checkbox
       await browser.$('#monday').click()
       //single select dd
       await browser.$('#country').selectByVisibleText('Germany') 

       //multi select drop
       await browser.$('#colors').selectByVisibleText('Yellow')
        await browser.$('#colors').selectByVisibleText('Green') 
        await browser.pause(2000);

        //scroll
        await browser.scroll(0,100)
        
        //scroll to element
        // await browser.$('#draggable').scrollIntoView() 
        //await browser.pause(2000);

        //mousse hover
        await browser.$('[class="dropbtn"]').moveTo()
        await browser.pause(2000);

        //dbclick
        await browser.$("//button[.='Copy Text']").doubleClick() //dbclick
        await browser.pause(2000);

        //drag & drop
        const drag = await browser.$('#draggable') 
        const drop =  await browser.$('#droppable')
        await drag.dragAndDrop(drop)
        await browser.pause(2000);

        //calender date picker
        await browser.$('[id="datepicker"]').click()
        await browser.$("//table[@class='ui-datepicker-calendar']//a[.='31']").click()
        await browser.pause(2000);
        await browser.$('[id="txtDate"]').click()
        await browser.$('[class="ui-datepicker-month"]').selectByVisibleText('Dec')
        await browser.$('[class="ui-datepicker-year"]').selectByVisibleText('2030')
        await browser.$("//table[@class='ui-datepicker-calendar']//a[.='31']").click()
        await browser.pause(2000);
        await browser.scroll(0,200)

       //upload file
        await browser.$("#singleFileInput").setValue("C:/Users/User/OneDrive/Desktop/PW docs/mytextfile.txt")
        await browser.pause(2000);

        //findelements
        let bookname= await browser.$$("//table[@name='BookTable']//tr//td[1]")
        const books = await bookname.map((el)=>{return el.getText()}) //(el)=>{el.get.text()}
        console.log(books);

        expect(books.length).toBeGreaterThan(10)
        




    })
})


