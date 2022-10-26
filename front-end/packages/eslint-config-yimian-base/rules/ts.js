module.exports = {
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  rules: {
    // TS
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/README.md
    // Allow usage of the any type.
    '@typescript-eslint/no-explicit-any': 'off',
    // 禁止出现未使用过的变量
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    // Enforce type definitions to consistently use either interface or type
    '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
    // Disallow duplicate enum member values
    '@typescript-eslint/no-duplicate-enum-values': 'error',
    // Disallow variable declarations from shadowing variables declared in the outer scope
    '@typescript-eslint/no-shadow': 'error',
  },
}
