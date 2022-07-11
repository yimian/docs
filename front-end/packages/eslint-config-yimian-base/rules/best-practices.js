module.exports = {
  rules: {
    // Best Practices
    // 禁止对 function 的参数进行重新赋值
    'no-param-reassign': [
      'error',
      {
        props: false,
      },
    ],
    // 禁止 if 语句中 return 语句之后有 else 块
    'no-else-return': 'error',
    // 禁止出现未使用过的表达式
    'no-unused-expressions': 'error',
    // 强制所有控制语句使用一致的括号风格(强制大括号)
    curly: 'error',
    // 要求使用 === 和 !==
    eqeqeq: 'error',
    // 禁止使用类似 eval() 的方法
    'no-implied-eval': 'error',
    // 禁止对 Function 对象使用 new 操作符
    'no-new-func': 'error',
    // 禁止对 String，Number 和 Boolean 使用 new 操作符
    'no-new-wrappers': 'error',
    // 禁用不必要的 return await
    'no-return-await': 'error',
    // 禁止抛出异常字面量
    'no-throw-literal': 'error',
    // 禁用一成不变的循环条件
    'no-unmodified-loop-condition': 'error',
    // 禁止多余的 return 语句
    'no-useless-return': 'error',
    // 要求或者禁止 Yoda 条件
    yoda: 'error',
  },
}
