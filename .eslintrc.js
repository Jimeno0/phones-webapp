module.exports = {
  env: {
    browser: true,
    es6: true,
    'cypress/globals': true
  },
  parser: 'babel-eslint',
  extends: [
    'standard' ,
    'standard-react' ,
    'plugin:jest/recommended',
    'plugin:cypress/recommended'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: [
    'react',
    'esling-plugin-cypress'
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
}



 
