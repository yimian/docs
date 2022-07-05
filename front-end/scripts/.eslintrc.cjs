/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json',
  ],
  env: {
    'vue/setup-compiler-macros': true,
    browser: true,
    node: true,
    es2022: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    // js/ts
    // https://eslint.org/
    camelcase: ['error', { properties: 'never' }],
    'no-console': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    semi: ['error', 'never'],
    'no-undef': 'off',
    'no-shadow': 'off',
    // https://github.com/prettier/prettier/issues/3806
    // https://github.com/prettier/prettier/pull/7111
    // 'operator-linebreak': ['error', 'before'],
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    'no-plusplus': 'error',
    'no-else-return': 'error',
    'no-unused-expressions': 'error',
    'no-duplicate-imports': 'off',
    'import/no-unresolved': 'off',
    'no-constant-condition': 'error',
    'import/no-dynamic-require': 'off',
    'import/extensions': 'off',
    'import/prefer-default-export': 'off',
    'block-spacing': 'warn',
    'func-names': 'error',
    'no-cond-assign': 'error',
    // 'array-bracket-spacing': 'error',
    // 'array-bracket-newline': 'off',
    // bracketSpacing: false,

    // vue
    'vue/require-default-prop': 'off',
    'vue/no-v-html': 'off',
    // 'vue/require-explicit-emits': 'off',
    'vue/multi-word-component-names': 'off',
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'always',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    // 'vue/max-attributes-per-line': [
    //   'error',
    //   {
    //     singleline: 3,
    //     multiline: 1,
    //   },
    // ],
    // 'vue/first-attribute-linebreak': [
    //   'error',
    //   {
    //     singleline: 'ignore',
    //     multiline: 'below',
    //   },
    // ],

    // ts
    // https://github.com/typescript-eslint/typescript-eslint/blob/main/packages/eslint-plugin/docs/rules/README.md
    // Allow usage of the any type.
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off', // setup()
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
      },
    ],

    // prettier
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
  },
}
