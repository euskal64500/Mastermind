const path = require('path');
const fs = require('fs');

const DEFAULT_CAPABILITY = {
  platformName: 'iOS',
  platformVersion: '12.1',
  deviceName: 'iPhone X',
  orientation: 'PORTRAIT',
  appiumVersion: '1.9.2',
  rotatable: false,
  app: path.join(__dirname, '../../dist/ios-simulator/Mastermind.app')
};

function readCapabilityFromLocalFile() {
  const jsonPath = process.env.QA_LOCAL_CAPABILITIES_JSON_PATH;
  if (!jsonPath) {
    return null;
  }

  try {
    return JSON.parse(fs.readFileSync(jsonPath, { encoding: 'utf8' }));
  } catch (e) {
    console.error('Failed to load json from file:', jsonPath);
    return null;
  }
}

exports.config = {
  //
  // ==================
  // Specify Test Files
  // ==================
  // Define which test specs should run. The pattern is relative to the directory
  // from which `wdio` was called. Notice that, if you are calling `wdio` from an
  // NPM script (see https://docs.npmjs.com/cli/run-script) then the current working
  // directory is where your package.json resides, so `wdio` will be called from there.
  //
  specs: [
    './tests/e2e/smoke/**/*.js'
  ],
  // Note:
  // You can run specific suite with
  // $ wdio --suite=smoke wdio.conf.js
  suites: {
    smoke: [
      './tests/e2e/smoke/**/*.js'
    ],
    regression: [
      './tests/e2e/regression/**/*.js'
    ]
  },
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
  //
  // ============
  // Capabilities
  // ============
  // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
  // time. Depending on the number of capabilities, WebdriverIO launches several test
  // sessions. Within your capabilities you can overwrite the spec and exclude options in
  // order to group specific specs to a specific capability.
  //
  // First, you can define how many instances should be started at the same time. Let's
  // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
  // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
  // files and you set maxInstances to 10, all spec files will get tested at the same time
  // and 30 processes will get spawned. The property handles how many capabilities
  // from the same test should run tests.
  //
  maxInstances: 1,
  //
  // If you have trouble getting all important capabilities together, check out the
  // Sauce Labs platform configurator - a great tool to configure your capabilities:
  // https://docs.saucelabs.com/reference/platforms-configurator
  //
  port: 4723, // port for appium
  path: '/wd/hub',
  capabilities: [
    readCapabilityFromLocalFile() || DEFAULT_CAPABILITY
  ],
  //
  // ===================
  // Test Configurations
  // ===================
  // Define all options that are relevant for the WebdriverIO instance here
  //
  // By default WebdriverIO commands are executed in a synchronous way using
  // the wdio-sync package. If you still want to run your tests in an async way
  // e.g. using promises you can set the sync option to false.
  sync: true,
  //
  // Level of logging verbosity: silent | verbose | command | data | result | error
  logLevel: 'error',
  //
  // Enables colors for log output.
  coloredLogs: true,
  //
  // If you only want to run your tests until a specific amount of tests have failed use
  // bail (default is 0 - don't bail, run all tests).
  bail: 0,
  //
  // Saves a screenshot to a given path if a command fails.
  screenshotPath: './errorShots/',
  //
  // Set a base URL in order to shorten url command calls. If your url parameter starts
  // with "/", then the base url gets prepended.
  baseUrl: 'http://localhost',
  //
  // Default timeout for all waitFor* commands.
  waitforTimeout: 10000,
  //
  // Default timeout in milliseconds for request
  // if Selenium Grid doesn't send response
  connectionRetryTimeout: 90000,
  //
  // Default request retries count
  connectionRetryCount: 3,
  //
  // Initialize the browser instance with a WebdriverIO plugin. The object should have the
  // plugin name as key and the desired plugin options as properties. Make sure you have
  // the plugin installed before running any tests. The following plugins are currently
  // available:
  // WebdriverCSS: https://github.com/webdriverio/webdrivercss
  // WebdriverRTC: https://github.com/webdriverio/webdriverrtc
  // Browserevent: https://github.com/webdriverio/browserevent
  // plugins: {
  //     webdrivercss: {
  //         screenshotRoot: 'my-shots',
  //         failedComparisonsRoot: 'diffs',
  //         misMatchTolerance: 0.05,
  //         screenWidth: [320,480,640,1024]
  //     },
  //     webdriverrtc: {},
  //     browserevent: {}
  // },
  //
  // Test runner services
  // Services take over a specific job you don't want to take care of. They enhance
  // your test setup with almost no effort. Unlike plugins, they don't add new
  // commands. Instead, they hook themselves up into the test process.
  services: ['appium'],
  appium: {
    waitStartTime: 30000,
    logFileName: 'appium.log',
    args: {
      address: '127.0.0.1',
      port: 4723,
      commandTimeout: '7200',
      sessionOverride: true,
      debugLogSpacing: true,
      platformVersion: '12.1',
      platformName: 'iOS',
      showIosLog: true,
      deviceName: 'iPhone X',
      nativeInstrumentsLib: true,
      isolateSimDevice: true,
      app: path.join(__dirname, '../../dist/ios-simulator/Mastermind.app')
    }
  },
  // Framework you want to run your specs with.
  // The following are supported: Mocha, Jasmine, and Cucumber
  // see also: http://webdriver.io/guide/testrunner/frameworks.html
  //
  // Make sure you have the wdio adapter package for the specific framework installed
  // before running any tests.
  framework: 'mocha',
  //
  // Test reporter for stdout.
  // The only one supported by default is 'dot'
  // see also: http://webdriver.io/guide/testrunner/reporters.html
  // reporters: ['dot'],
  //
  // Options to be passed to Mocha.
  // See the full list at http://mochajs.org/
  mochaOpts: {
    ui: 'bdd',
    timeout: 600000
  },
  //
  // =====
  // Hooks
  // =====
  // WebdriverIO provides several hooks you can use to interfere with the test process in order to enhance
  // it and to build services around it. You can either apply a single function or an array of
  // methods to it. If one of them returns with a promise, WebdriverIO will wait until that promise got
  // resolved to continue.
  //
  // Gets executed once before all workers get launched.
  onPrepare(config, capabilities) {
    console.log('Preparing test session...');
  },
  //
  // Gets executed just before initialising the webdriver session and test framework. It allows you
  // to manipulate configurations depending on the capability or spec.
  // beforeSession: function (config, capabilities, specs) {
  // },
  //
  // Gets executed before test execution begins. At this point you can access all global
  // variables, such as `browser`. It is the perfect place to define custom commands.
  // before: function (capabilities, specs) {
  // },
  //
  // Hook that gets executed before the suite starts
  beforeSuite(suite) {
    console.info();
    console.log('info', '================================ TEST SUITE ===============================');
    console.log('info', `TITLE: ${suite.title}`);
    console.log('info', `FILE: ${suite.file}`);
    console.log('info', '===========================================================================');
    console.info();
  },
  //
  // Hook that gets executed _before_ a hook within the suite starts (e.g. runs before calling
  // beforeEach in Mocha)
  // beforeHook: function () {
  // },
  //
  // Hook that gets executed _after_ a hook within the suite starts (e.g. runs after calling
  // afterEach in Mocha)
  // afterHook: function () {
  // },
  //
  // Function to be executed before a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  beforeTest(test) {
    console.info();
    console.log('**********************************');
    console.log(`TC: ${test.title}`);
    console.log('Reseting the game btw each test...');
    browser.touchAction('~restart', 'tap');
  },
  //
  // Runs before a WebdriverIO command gets executed.
  // beforeCommand: function (commandName, args) {
  // },
  //
  // Runs after a WebdriverIO command gets executed
  // afterCommand: function (commandName, args, result, error) {
  // },
  //
  // Function to be executed after a test (in Mocha/Jasmine) or a step (in Cucumber) starts.
  afterTest(test) {
    if (test.err) {
      console.debug(test.err.message);
    }
    const success = (test.passed) ? 'PASSED' : 'FAILED';
    console.info(`----> ${success}`);
  }
  // Hook that gets executed after the suite has ended
  // afterSuite: function (suite) {
  // },
  //
  // Gets executed after all tests are done. You still have access to all global variables from
  // the test.
  // after: function (result, capabilities, specs) {
  // },
  //
  // Gets executed right after terminating the webdriver session.
  // afterSession: function (config, capabilities, specs) {
  // },
  //
  // Gets executed after all workers got shut down and the process is about to exit. It is not
  // possible to defer the end of the process using a promise.
  // onComplete: function(exitCode) {
  // }
};
