module.exports = {
  extends: 'airbnb',

  parser: 'babel-eslint',

  globals: {
    __DEV__: true,
    __BUNDLE_START_TIME__: true,
    expect: true,
    fetch: true
  },

  env: {
    mocha: true
  },

  plugins: [
    'react-native',
    'mocha'
  ],

  rules: {
    'arrow-body-style': 0,
    'arrow-parens': 0,
    'class-methods-use-this': 0,
    'comma-dangle': [2, 'never'],
    'func-names': 0,
    'global-require': 1,
    'import/no-extraneous-dependencies': 'off',
    'import/no-named-as-default-member': 'off',
    'import/prefer-default-export': 'off',
    // 'indent': ['error', 4],
    'key-spacing': [2, { beforeColon: false, afterColon: true, mode: 'minimum' }],
    'max-len': [2, 120, 4, { ignoreComments: true, ignoreUrls: true }],
    // 'no-bitwise': ['error', { 'allow': ['~'] }],
    'no-catch-shadow': 2,
    'no-multi-spaces': 0,
    'no-multiple-empty-lines': [2, { max: 1, maxEOF: 1 }],
    'no-nested-ternary': 0,
    'no-param-reassign': [2, { props: false }],
    'no-plusplus': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': [2, { vars: 'local', args: 'none' }],
    'no-useless-call': 2,
    'prefer-template': 0,
    'wrap-iife': [2, 'inside'],

    // Overrides: General
    'no-console': ['warn', { allow: ['warn', 'error']}],
    'no-constant-condition': 'error',
    'import/extensions': ['error', { js: 'never', json: 'always' }],
    'import/imports-first': 'off',
    'import/newline-after-import': 'off',
    'no-mixed-operators': ['error', {
      groups: [
        // ['+', '-', '*', '/', '%', '**'],
        ['&', '|', '^', '~', '<<', '>>', '>>>'],
        ['==', '!=', '===', '!==', '>', '>=', '<', '<='],
        // ['&&', '||'],
        ['in', 'instanceof']
      ],
      allowSamePrecedence: false
    }],
    'no-unused-expressions': ['error', {
      allowShortCircuit: true
    }],

    // General mocha rules
    'mocha/no-mocha-arrows': 'error',
    'mocha/handle-done-callback': 'error',
    'mocha/no-exclusive-tests': 'error',
    'mocha/no-global-tests': 'error',
    'mocha/no-return-and-callback': 'error',
    'mocha/no-sibling-hooks': 'error',

    // react rules
    'react/forbid-prop-types': ['error', { forbid: ['any'] }],
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-pascal-case': 'error',
    'react/no-unused-prop-types': 'off',
    'react/prefer-es6-class': ['error', 'always'],
    'react/prefer-stateless-function': 'off',
    'react/require-extension': 'off',

    // react-native rules
    'react-native/no-unused-styles': 'error',
    'react-native/split-platform-components': 'error'
  },

  settings: {
    'import/resolver': {
      'babel-module': {
        'extensions': ['.js', '.ios.js', '.android.js']
      }
    }
  }
};

// {
//   "env": {
//     "node": true,
//     "es6": true 
//   },
//   "parser": "babel-eslint",
//   "extends": "airbnb",
//   "rules": {
//     "react/jsx-filename-extension": ["error", { "extensions": [".js", ".jsx"] }],
//     "object-curly-newline": ["error", { "multiline": true, "minProperties": 10 }]
//   }
// }
