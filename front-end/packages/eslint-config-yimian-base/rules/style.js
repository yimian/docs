module.exports = {
  rules: {
    // Stylistic
    // 强制使用骆驼拼写法命名约定，属性名除外
    camelcase: ['error', { properties: 'never' }],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: [
      'error',
      'single',
      { avoidEscape: true, allowTemplateLiterals: false },
    ],
    // 要求或禁止末尾逗号
    'comma-dangle': ['error', 'always-multiline'],
    // 强制在逗号前后使用一致的空格
    'comma-spacing': ['error', { before: false, after: true }],
    // 强制使用一致的逗号风格
    'comma-style': ['error', 'last'],
    // 要求或禁止使用分号代替 ASI
    semi: ['error', 'never'],
  },
}
