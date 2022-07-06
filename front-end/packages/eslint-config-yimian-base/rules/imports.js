module.exports = {
  plugins: ['import'],
  rules: {
    // Module
    // 禁止重复模块导入
    'no-duplicate-imports': 'error',
    // ensure imports point to files/modules that can be resolved
    'import/no-unresolved': 'off',
    // Forbid require() calls with expressions
    'import/no-dynamic-require': 'off',
    // Ensure consistent use of file extension within the import path
    'import/extensions': 'off',
    // Require modules with a single export to use a default export
    'import/prefer-default-export': 'off',
  },
}
