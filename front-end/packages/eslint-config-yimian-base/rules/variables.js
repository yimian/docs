module.exports = {
  rules: {
    // Variables
    // 禁止变量声明与外层作用域的变量同名
    'no-shadow': 'off',
    // 禁止出现未使用过的变量
    // eslint和eslint-ts中的这条规则校验不一致，所以默认开启ts中的无用变量校验，关闭eslint的校验
    'no-unused-vars': 'off',
  },
}
