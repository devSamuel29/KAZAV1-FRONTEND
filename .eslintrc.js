module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'next/core-web-vitals',
    'plugin:prettier/recommended',
    'plugin:sonarjs/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier', 'sonarjs'],
  rules: {
    'sonarjs/no-duplicate-string': ['error', 10],
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        arrowParens: 'avoid',
        singleQuote: true,
        tabWidth: 2,
        semi: false,
        printWidth: 90,
      },
    ],
    'react/display-name': 0,
  },
}
