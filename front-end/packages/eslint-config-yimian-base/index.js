module.exports = {
  root: true,
  extends: [
    'eslint:recommended',
    ...[
      './rules/vue',
      './rules/ts',
      './rules/best-practices',
      './rules/errors',
      './rules/style',
      './rules/variables',
      './rules/imports',
      './rules/prettier',
    ].map(require.resolve),
  ],
  env: {
    browser: true,
    node: true,
    es2022: true,
  },
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
}
