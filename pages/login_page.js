const { I } = inject();

module.exports = {
  locators: {
    //insert your locators
    // this.button = '#button'
    pageTitle: '//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.TextView[1]',
    LoginButton: '//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]',
    email: 'input[name=fileUpload]',
    password: '.file-size',
    submitLogin: '//android.view.ViewGroup[@content-desc="button-LOGIN"]',
    messageError: '//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]'
  },
  // insert your methods here
  async verifyHomePage()  {
    I.seeAppIsInstalled("com.wdiodemoapp");
    I.waitForElement(this.locators.pageTitle,3);
    I.waitForElement(this.locators.LoginButton,3);
    I.click(this.locators.LoginButton);
    I.wait(3);
  },
  async submitLogin() {
    I.waitForElement(this.locators.submitLogin,3);
    I.click(this.locators.submitLogin);
    I.wait(5);
  },
  async addDates(email, password) {
    I.waitForElement(this.locators.email,3);
    I.click(this.locators.email);
    I.fillField(this.locators.email, email);
    I.click(this.locators.password);
    I.fillField(this.locators.password, password);
  },
  async validateMessageError() {
    I.waitForElement(messageError,3)
    let message = await I.grabTextFrom(this.locators.messageError);
    I.seeTextEquals(message, 'Please enter a valid email address');
    I.wait(3);
  }
}



