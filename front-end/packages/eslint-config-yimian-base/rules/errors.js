module.exports = {
  rules: {
    // Possible Errors
    // 禁用 console
    'no-console': 'off',
    // 禁用 debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 禁用一元操作符 ++ 和 --（允许在 for 循环表达式使用）
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    // 禁止或强制在代码块中开括号前和闭括号后有空格
    'block-spacing': 'warn',
    // 禁止使用命名的 function 表达式
    'func-names': 'error',
    // 强制在代码块中使用一致的大括号风格
    'brace-style': 'warn',
  },
}
