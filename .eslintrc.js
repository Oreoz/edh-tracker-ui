module.exports = {
  root: true,
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  extends: 'eslint:recommended',
  env: {
    browser: true
  },
  rules: {
    'comma-dangle': [ 'error', 'never' ],
    'semi': [ 'error', 'always' ],
    'max-len': [ 'error', 100 ]
  }
};
