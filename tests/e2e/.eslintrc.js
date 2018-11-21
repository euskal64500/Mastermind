module.exports = {
  extends: '../../.eslintrc.js',

  globals: {
    // wdio automatically defines this.
    browser: true
  },

  plugins: [
    'mocha',
    'webdriverio'
  ],

  rules: {
    'mocha/no-mocha-arrows': 'error',
    'no-console': 'off',  // Because webdriver.io assumes to use console.log for logger.
    'no-unused-expressions': 'off',
    'prefer-arrow-callback': 'off'
  }
};
