export class Logonpage
{

    get usernametf()
    {
        return $('#username')
    }
    get passwordtf(){ return $('#password')}

    get submitbtn()
    {
        return $('#submit')
    }

    async loginaction(usn:string, pwd:string)
    {
        await this.usernametf.setValue(usn)
        await this.passwordtf.setValue(pwd)
        await this.submitbtn.click()
    }
}