const { I } = inject();

class loginPage {
  constructor() {
    //insert your locators
    // this.button = '#button'
    btnLogin = '//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]';
    email = 'input[name=fileUpload]';
    password = '.file-size';
    submitButton = '.file-name';
  }
  // insert your methods here
  async openApp() {
    I.waitForElement(this.btnLogin);
    I.click(this.btnLogin)
  }
  async loginInApp(email, password) {
    I.waitForElement(this.email);
    I.fillField(this.email, email);
    I.fillField(this.password, password);
    I.click(this.submitButton);
  }
}

// For inheritance
module.exports = new loginPage();
module.exports.loginPage = loginPage;
