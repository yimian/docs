module.exports = {
  extends: [
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-typescript/recommended',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  parser: 'vue-eslint-parser',
  plugins: ['vue'],
  rules: {
    // vue
    'vue/no-v-html': 'off',
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
  },
}
