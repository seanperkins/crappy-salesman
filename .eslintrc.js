module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'react-app',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
  ],
  'rules': {
    semi: [2, 'never'],
    'object-curly-spacing': [2, 'never'],
  }
}
