import { Logonpage } from "../pageobjects/login.page.ts"
import  testdata  from "../../testdata/data.json";

describe('practice login', () => {
    testdata.forEach((un)=>{
        
          it('logintest', async() => {
        const lgn = new Logonpage()
        await browser.url('/practice-test-login/')
        await lgn.usernametf.waitForEnabled({timeout:2000})
        await lgn.submitbtn.waitForClickable({timeout:2000, timeoutMsg:'Button is not receiving click'})
        await lgn.passwordtf.waitForStable({timeout:2000})
        expect(lgn.submitbtn).toBeClickable()
        await lgn.loginaction(un.usn, un.pwd)
        await browser.pause(2000)
        
    });
    


    })
  
});