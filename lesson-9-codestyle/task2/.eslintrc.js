module.exports = {
  extends: 'eslint-config-airbnb-base',

  rules: {
    'no-console': 2,
    'import/prefer-default-export': 'off',
    'linebreak-style': ['error', 'windows'],
  },
  parserOptions: {
    ecmaVersion: 10,
    sourceType: 'module',
  },
  env: {
    browser: true,
  },

};
