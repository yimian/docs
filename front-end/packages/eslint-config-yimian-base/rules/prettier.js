/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  extends: ['@vue/eslint-config-prettier'],
  rules: {
    // prettier
    'prettier/prettier': [
      'error',
      {
        semi: false,
        useTabs: false,
        tabWidth: 2,
        printWidth: 80,
        singleQuote: true,
        trailingComma: 'all',
        endOfLine: 'auto',
      },
    ],
  },
}
