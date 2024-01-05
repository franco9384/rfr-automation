/** 
const { I } = inject();
Feature('login');

Scenario('login without email',  () => {
    Given('I have open the app webdriverio page', async () => {
        // TODO: replace with your own step
        I.seeAppIsInstalled("com.wdiodemoapp");
        I.waitForElement('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]');
        I.click('//android.widget.Button[@content-desc="Login"]/android.widget.TextView[2]');
      });
      When('I click on log in, I do not add any data and I click on LOGIN', async() => {
          // TODO: replace with your own step 
          I.wait(3)
          I.click('//android.view.ViewGroup[@content-desc="button-LOGIN"]');
      
      
      });
      Then('should show the error', async () => {
        // TODO: replace with your own step 
        I.see('Please enter a valid email address');
        I.wait(5);
      });

});
*/