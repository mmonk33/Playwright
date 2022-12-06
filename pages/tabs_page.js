const Page = require ('./base_page');

class LoginPage extends Page{

    //page locators:
    get inputUsername() { return $('#txtUsername') }
    get inputPassword() { return $('#txtPassword') }
    get loginBtn() { return $('#btnLogin') }

    //page actions:
    //to open a URL
    async open () {
        await super.open('/')
    }
    //to enter username and password into login form and click login button
    async login (username,password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.loginBtn.click();
    }
}

module.exports = new LoginPage();