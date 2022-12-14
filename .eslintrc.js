module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'prettier/prettier': [
      'error',
      {
        semi: true,
        printWidth: 80,
        singleQuote: true,
        arrowParens: 'avoid',
        quoteProps: 'as-needed',
        tabWidth: 2,
        useTabs: false,
        trailingComma: 'none'
      }
    ]
  }
};
