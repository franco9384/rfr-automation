require('dotenv').config(),

exports.config = {
  output: './output',
  helpers: {
    Appium: {
      appiumV2: true,
      app: 'C:/Users/reyes/Desktop/rfr-automation/app/Android-NativeDemoApp-0.4.0.apk',
      platform: 'Android',
      device: 'Moto G7 Play',
      path: '/wd/hub',
      port: 4723,
      desiredCapabilities: {
        platformName: 'Android',
        deviceName: 'Moto G7 Play',
        udid: 'ZY3262RRVR',
        noReset: true,
        appPackage: 'com.wdiodemoapp',
        appActivity: 'com.wdiodemoapp.MainActivity',
        automationName: 'UiAutomator2'
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: "./pages/login_page.js"
  },
  mocha: {
    reporterOptions: {
      reportDir: "output"
  },
  },
  bootstrap: null,
  timeout: null,
  teardown: null,
  hooks: [],
  gherkin: {
    features: './features/*.feature',
    steps: ['./step_definitions/login_steps.js']
  },
  plugins: {
    commentStep: {
      enabled: true,
      registerGlobal: true
    },
    screenshotOnFail: {
      enabled: true
    },
  },
  stepTimeout: 50,
  stepTimeoutOverride: [{
      pattern: 'wait.*',
      timeout: 50
    },
    {
      pattern: 'amOnPage',
      timeout: 50
    }
  ],
  tests: './tests/*_test.js',
  name: 'rfr-automation'
}