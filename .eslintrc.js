module.exports = {
  parser: 'babel-eslint',

  parserOptions: {
    sourceType: 'module',
    ecmaVersion: 2018,
  },

  env: {
    browser: true,
    es6: true,
    jasmine: true,
    node: true,
  },

  'extends': 'webtrinkets',
}
