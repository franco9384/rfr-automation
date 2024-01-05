const { I, loginPage } = inject();

// Add in your custom step files

// ------------Page Object Model---------------

Given('I am in the Home Page', async () => {
  // TODO: replace with your own step
 loginPage.verifyHomePage();
});
When('I do not add email & password, I click in LOGIN', async() => {
    // TODO: replace with your own step 
 loginPage.submitLogin();

});
Then('should show the message of the error', async () => {
  // TODO: replace with your own step 
 loginPage.validateMessageError();
  
});

//-----------------------------------------------------------------------------

Given('I have open the app webdriverio in Home Page', async () => {
  // TODO: replace with your own step
  I.seeAppIsInstalled("com.wdiodemoapp");
  I.seeElement('//android.widget.ScrollView[@content-desc="Home-screen"]/android.view.ViewGroup/android.widget.TextView[1]');
  I.waitForElement('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]');
  I.click('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]');

});
When('I do not add data & I click on LOGIN', async() => {
    // TODO: replace with your own step 
    I.wait(3);
    I.waitForElement('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
    I.click('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
    
});
Then('should show the error', async () => {
  // TODO: replace with your own step 
  I.waitForElement('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]',5);
  //let message = await I.grabTextFrom('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]',5);
  //I.seeTextEquals(message, 'Please enter a valid email address');
  I.wait(3);
});

