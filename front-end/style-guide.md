# 前端代码规范

**代码规范旨在增强团队开发协作、提升代码质量、统一团队代码的语法风格和书写习惯，降低程序出错的概率。让代码易于被理解和维护，便于成员间能以更低成本（时间、精力。。。）熟悉对方的代码。以下包含语法规范和最佳实践。**

***这里基于已有规范做一些特殊说明、修改、强调和归纳提炼，文档着重于 JavaScript/[TypeScript](https://www.typescriptlang.org/)，更多信息请查看下面的规范***

参考:

1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [Vue 风格指南](https://v3.cn.vuejs.org/style-guide/)
3. [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
4. [TypeScript ESLint](https://typescript-eslint.io/)
5. [eslint-config-airbnb-typescript](https://github.com/iamturns/eslint-config-airbnb-typescript)
6. [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html)

**对规范有更好的建议、有新增部分，请提 PR 或直接联系田益铭**

------

## :page_with_curl: Table of Contents

1. [命名规范](#命名规范)
2. [基本原则](#基本原则)
3. [缩进](#缩进)
4. [注释](#注释)
5. [标点符号](#标点符号)
6. [换行、空行](#换行、空行)
7. [留空](#留空)
8. [括号](#括号)
9. [比较运算符与相等](#比较运算符与相等)
10. [常量](#常量)
11. [变量](#变量)
12. [函数](#函数)
13. [解构赋值](#解构赋值)
14. [对象](#对象)
15. [数组](#数组)
16. [迭代器](#迭代器)
17. [控制语句 Control Statements](#控制语句-Control-Statements)
18. [undefined](#undefined)
19. [HTML](#HTML)
20. [CSS](#CSS)
21. [组件中的 HTML 格式](#组件中的-HTML-格式)
22. [引入 CSS 和 JavaScript 文件](#引入-CSS-和-JavaScript-文件)
23. [Vue 组件命名和结构](#Vue-组件命名和结构)
24. [项目结构](#项目结构)
25. [PS](#PS)
26. [常用模块命名](#常用模块命名)

### 命名规范

- **项目、文件命名统一采用小写英文字母，多个单词使用中划线 '-' 连接，禁止包含空格和特殊符号**，例：`my-project-name`
- **前后端分离的项目，前端项目的命名后缀须带上 `-fe`**，例：`oneload-fe`
- CSS 文件命名: `suffix.css(.scss)`，共用 `global.css`，首页 `index.css`，其他依实际模块需求命名
- JS 文件命名: `suffix.js`，共用 `common.js`，其他依实际模块需求命名
- 有复数结构时，要采用复数命名法，比如说： scripts, styles, plugins, images, data-models
- 以字母开头命名
- 避免只用一个字母来命名，应该让你的命名更有意义
- 常用模块命名见[文末](#常用模块命名)

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 基本原则

**结构、样式、行为分离**

> 尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。
>
> 基于模块开发：始终基于模块的方式来构建你的 app，每一个子模块只做一件事情。

Vue 项目：
**单文件组件的顶级元素统一采用下面的顺序**

（只有特殊且针对单个组件的样式才应该放在组件里，其余样式应该合理地放到 `src/styles` 文件夹）

```html
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 缩进

  统一使用**两个空格**缩进（anyway: 不要使用 `Tab` 或者 `Tab`、空格混搭)

**[⬆ back to top](#page_with_curl-table-of-contents)**

### [注释](https://github.com/airbnb/javascript#comments)

**注释须为单独一行**，不可与业务代码同行

- 单行注释

  缩进与下一行被注释说明的代码一致
  - HTML

    `<!--<div class="sell"></div>-->`

  - JS 使用 `//`，且必**须独占一行**。

    `// is current tab`
- 多行注释
  - HTML

  ```html
  <!-- <div class="sell">
    <p>多行注释</p>
    <p>多行注释</p>
    <p>多行注释</p>
  </div> -->
  ```

  - 尽量避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，**使用多个单行注释**

- 函数注释

  ```javascript
  /**
   * 函数描述
   *
   * @param {string} p1 参数 1 的说明
   * @param {string} p2 参数 2 的说明，比较长
   *     那就换行了
   * @param {number=} p3 参数 3 的说明（可选）
   * @return {Object} 返回值描述
   */
  function foo(p1, p2, p3 = 10) {
    return {
      p1,
      p2,
      p3,
    };
  }
  ```

- 善用 `FIXME` 和 `TODO`。用 `// FIXME:` 给问题做注释，用 `// TODO:` 来注释问题的解决方案

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 标点符号

1. ~~每个表达式语句后面**须加分号**~~，关于句末是否加分号目前还没有一个比较通用的规则，建议：以前的项目和项目已有代码保持一致，全新的项目句末不再添加分号
2. JS 代码中优先使用**单引号**，最外层统一使用单引号

  ```javascript
  // bad
  const x = "test";

  // good
  const y = 'foo';
  const z = '<div id="test"></div>';
  ```

3. [**逗号**](https://github.com/airbnb/javascript#commas) eslint: [comma-style](https://eslint.org/docs/rules/comma-style.html)

  - **不要前置逗号**

  ```javascript
  // bad
  const story = [
      once
    , upon
    , aTime
  ];

  // good
  const story = [
    once,
    upon,
    aTime,
  ];

  // bad
  const hero = {
      firstName: 'Ada'
    , lastName: 'Lovelace'
    , birthYear: 1815
    , superPower: 'computers'
  };

  // good
  const hero = {
    firstName: 'Ada',
    lastName: 'Lovelace',
    birthYear: 1815,
    superPower: 'computers',
  };
  ```

  - **添加额外的结尾逗号** eslint: [comma-dangle](https://eslint.org/docs/rules/comma-dangle.html)

  ```diff
  // bad - git diff without trailing comma
  const hero = {
      firstName: 'Florence',
  -   lastName: 'Nightingale'
  +   lastName: 'Nightingale',
  +   inventorOf: ['coxcomb chart', 'modern nursing']
  };

  // good - git diff with trailing comma
  const hero = {
      firstName: 'Florence',
      lastName: 'Nightingale',
  +   inventorOf: ['coxcomb chart', 'modern nursing'],
  };
  ```

  ```javascript
  // bad
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully'
  };

  const heroes = [
    'Batman',
    'Superman'
  ];

  // good
  const hero = {
    firstName: 'Dana',
    lastName: 'Scully',
  };

  const heroes = [
    'Batman',
    'Superman',
  ];

  // bad
  function createHero(
    firstName,
    lastName,
    inventorOf
  ) {
    // does nothing
  }

  // good
  function createHero(
    firstName,
    lastName,
    inventorOf,
  ) {
    // does nothing
  }

  // good (注意：逗号不应出现在使用了 ... 操作符的参数后面)
  function createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  ) {
    // does nothing
  }

  // bad
  createHero(
    firstName,
    lastName,
    inventorOf
  );

  // good
  createHero(
    firstName,
    lastName,
    inventorOf,
  );

  // good  (注意：逗号不应出现在使用了 ... 操作符的参数后面)
  createHero(
    firstName,
    lastName,
    inventorOf,
    ...heroArgs
  )
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 换行、空行

1. **[对所有多行代码块使用大括号](https://github.com/airbnb/javascript#blocks)**

  ```javascript
  // bad
  if (test)
    return false;

  // bad
  if (test) return false;

  // good
  if (test) {
    return false;
  }

  // bad
  function foo() { return false; }

  // good
  function bar() {
    return false;
  }

  // bad
  if (test) {
    thing1();
    thing2();
  }
  else {
    thing3();
  }

  // good
  if (test) {
    thing1();
    thing2();
  } else {
    thing3();
  }

  // no-else-return
  // bad
  function dogs() {
    if (x) {
      return x;
    } else {
      if (y) {
        return y;
      }
    }
  }

  // good
  function foo() {
    if (x) {
      return x;
    }

    return y;
  }

  // good
  function cats() {
    if (x) {
      return x;
    }

    if (y) {
      return y;
    }
  }

  // good
  function dogs(x) {
    if (x) {
      if (z) {
        return y;
      }
    } else {
      return z;
    }
  }

  // best
  // 如果只有两个返回值且需要简单的判断，最好使用 `三元表达式` 代替 `if {} else {}`
  function foo() {
    return x === 0 ? x : y;
  }

  // best
  // 当 x 为 [falsy](https://developer.mozilla.org/en-US/docs/Glossary/Falsy) 时，返回 y
  function foo() {
    return x || y;
  }
  ```

2. 每行代码不超过 120 个字符
3. 逻辑块之间加空行增加可读性
4. 每个 `let`、`const` 只能声明一个变量，且**变量声明后需要空行**（当变量声明在代码块的最后一行时，则无需空行）
5. **注释前需要加空行**（当注释在代码块的第一行时，则无需空行）
6. 文件最后保留一个空行

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 留空

1. 使用留空应该遵循英语阅读惯例

    1. 例如，每个逗号和冒号（以及适用的分号）后面要空一格，但在括号内部的左侧和右侧都不要加空格
    2. 另外，大括号应该总是和他们前面的参数出现在同一行

  ```javascript
  // bad
  for ( let i = 0, j = arr.length; i < j; i += 1 )
  {
    // Do something.
  }

  for(let i=0,j=arr.length;i<j;i++){
    // Do something.
  }

  // good
  for (let i = 0, len = arr.length; i < len; i += 1) {
    // Do something.
  }
  ```

2. 操作符两端添加空格

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 括号

下列关键字后必须有大括号（**即使代码块的内容只有一行**），且需要单独换行：

```basic
`if` ,  `else`, `for`,  `while`, `do`, `switch`, `try`, `catch`,  `finally`,  `with`
```

```javascript
// bad
if (condition) doSomething();

// good
if (condition) {
  doSomething();
}
```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### [比较运算符与相等](https://github.com/airbnb/javascript#comparison-operators--equality)

1. 用 `===` 和 `!==` 而不是 `==` 和 `!=`
2. **布尔值要用缩写**

  ```javascript
  // bad
  if (isValid === true) {
    // ...
  }

  // good
  if (isValid) {
    // ...
  }

  // bad
  if (name) {
    // ...
  }

  // good
  if (name !== '') {
    // ...
  }

  // bad
  if (collection.length) {
    // ...
  }

  // good
  if (collection.length > 0) {
    // ...
  }
  ```

3. 三元表达式不应该嵌套，通常是单行表达式

  ```javascript
  // bad
  const foo = maybe1 > maybe2
    ? 'bar'
    : value1 > value2 ? 'baz' : null;

  // split into 2 separated ternary expressions
  const maybeNull = value1 > value2 ? 'baz' : null;

  // better
  const foo = maybe1 > maybe2
    ? 'bar'
    : maybeNull;

  // best
  const foo = maybe1 > maybe2 ? 'bar' : maybeNull;
  ```

4. **避免不必要的三元表达式**

  ```javascript
  // bad
  const foo = a ? a : b;
  const bar = c ? true : false;
  const baz = c ? false : true;

  // good
  const foo = a || b;
  const bar = !!c;
  const baz = !c;
  ```

5. 用括号来组合操作符。只有当为标准的算术运算符（+, -, *, 和 /），并且它们的优先级显而易见时，才可以不用括号

  ```javascript
  // bad
  const foo = a && b < 0 || c > 0 || d + 1 === 0;

  // bad
  const bar = a ** b - 5 % d;

  // bad
  // 他人会陷入 (a || b) && c 的迷惑中
  if (a || b && c) {
    return d;
  }

  // good
  const foo = (a && b < 0) || c > 0 || (d + 1 === 0);

  // good
  const bar = (a ** b) - (5 % d);

  // good
  if (a || (b && c)) {
    return d;
  }

  // good
  const bar = a + b / c * d;
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 常量

1. **命名方法** : 全部大写
2. **命名规范** : 使用大写字母和下划线来组合命名，下划线用以分割单词

  ```javascript
  const MAX_COUNT = 10;
  const URL = 'https://www.google.com/';
  ```

3. Android、iOS

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 变量

1. 标准变量采用驼峰式命名
2. **为每个变量声明都单独用一个 `const` 或 `let`**

  ```javascript
  // bad
  let hangModules = [],
      missModules = [],
      visited = {};

  // good
  let hangModules = [];
  let missModules = [];
  let visited = {};
  ```

3. 把 `const`s 和 `let`s 分组

  ```javascript
  // bad
  let i, len, dragonball,
      items = getItems(),
      goSportsTeam = true;

  // bad
  let i;
  const items = getItems();
  let dragonball;
  const goSportsTeam = true;
  let len;

  // good
  const goSportsTeam = true;
  const items = getItems();
  let dragonball;
  let i;
  let length;
  ```

4. 构造函数，第一个字母大写
5. 不要使用一元自增自减运算符。eslint: [no-plusplus](https://eslint.org/docs/rules/no-plusplus)
6. 在你需要的地方再声明变量，但是要放在合理的位置
7. `boolean` 类型的变量使用 `is` 或 `has` 开头
8. `类名` 使用 `名词`

  ```javascript
  function Engine(options) {
  }
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 函数

**命名规则** : 前缀为动词，使用 `动宾短语`，可读性强，见名晓义

| 动词 | 含义                            | 返回值/备注                                         |
| ---- | ------------------------------ | ------------------------------------------------- |
| can  | 判断是否可执行某个动作 ( 权限 )    | 函数返回一个布尔值。true：可执行；false：不可执行        |
| has  | 判断是否含有某个值                | 函数返回一个布尔值。true：含有此值；false：不含有此值    |
| is   | 判断是否为某个值                 | 函数返回一个布尔值。true：为某个值；false：不为某个值     |
| get  | 获取某个值                      | 函数返回一个非布尔值                                  |
| set  | 设置某个值                      | 无返回值、返回是否设置成功或者返回链式对象                |
| handle | 事件处理函数                  | 事件处理函数添加 `handle` 前缀                        |
| show | 显示                           | 函数返回一个布尔值：true                              |
| hide | 隐藏                           | 函数返回一个布尔值：false                             |
| read | 接口：获取数据(对应：GET)         | 获取到的数据                                         |
| create | 接口：添加数据(对应：POST)      | 添加数据                                            |
| update | 接口：更新数据(对应：UPDATE)    | 更新数据                                            |
| delete | 接口：删除数据(对应：DELETE)    | 删除数据                                            |

  ```javascript
  // 是否可编辑
  function canEdit() {
    return true;
  }

  // 获取标题
  function getTitle() {
    return this.name;
  }
  ```

- 函数参数不要使用 `arguments`，使用 `...` 代替

  ```javascript
  // bad
  function concatenateAll() {
    const args = Array.prototype.slice.call(arguments);
    return args.join('');
  }

  // good
  function concatenateAll(...args) {
    return args.join('');
  }
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### [解构赋值](https://github.com/airbnb/javascript#destructuring)

  ```javascript
  // good
  const { data } = this;

  // bad
  function getFullName(user) {
    const firstName = user.firstName;
    const lastName = user.lastName;

    return `${firstName} ${lastName}`;
  }

  // good
  function getFullName(user) {
    const { firstName, lastName } = user;
    return `${firstName} ${lastName}`;
  }

  // best
  function getFullName({ firstName, lastName }) {
    return `${firstName} ${lastName}`;
  }

  const arr = [1, 2, 3, 4];

  // bad
  const first = arr[0];
  const second = arr[1];

  // good
  const [first, second] = arr;
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 对象

1. 使用字面量值创建对象

  ```javascript
  // bad
  const a = new Object();

  // good
  const a = {};
  ```

2. **当使用动态属性名创建对象时，请使用对象计算属性名来进行创建**

  ```javascript
  function getKey(k) {
    return `a key named ${k}`;
  }

  // bad
  const obj = {
    id: 5,
    name: 'San Francisco',
  };
  obj[getKey('enabled')] = true;

  // good
  const obj = {
    id: 5,
    name: 'San Francisco',
    [getKey('enabled')]: true,
  };
  ```

3. **使用对象方法、属性的简写方式**

  ```javascript
  const job = 'FrontEnd';

  // bad
  const item = {
    job: job,
    value: 1,
    addValue: function (val) {
      return item.value + val;
    },
  };

  // good
  const item = {
    job,
    value: 1,
    addValue (val) {
      return item.value + val;
    },
  };
  ```

4. **只对非法标识符的属性使用引号**
5. 优先使用对象展开运算符 `...` 来做对象`浅拷贝`而不是使用 `Object.assign`

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 数组

1. 使用字面量值创建数组

  ```javascript
  // bad
  const items = new Array();

  // good
  const items = [];
  ```

2. 向数组中添加元素时，使用 push 方法

  ```javascript
  const items = [];

  // bad
  items[items.length] = 'test';

  // good
  items.push('test');
  ```

3. 使用展开运算符 `...` 复制数组
4. 把一个可迭代的对象转换为数组时，使用展开运算符 `...` 而不是 `Array.from`

  ```javascript
  const foo = document.querySelectorAll('.foo');

  // bad
  const nodes = Array.from(foo);

  // best
  const nodes = [...foo];
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 迭代器

不要使用 `iterators`，建议使用 JS 更高优先级的函数代替 `for-in` 或 `for-of` 循环，除非迫不得已

  ```javascript
  const numbers = [1, 2, 3, 4, 5];

  // bad
  let sum = 0;

  for (let num of numbers) {
    sum += num;
  }

  // good
  let sum = 0;

  numbers.forEach(num => sum += num);

  // better
  const sum = numbers.reduce((total, num) => total + num, 0);
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### [控制语句 Control Statements](https://github.com/airbnb/javascript#control-statements)

  ```javascript
  // bad
  if ((foo === 123 || bar === 'abc') && doesItLookGoodWhenItBecomesThatLong() && isThisReallyHappening()) {
    thing1();
  }

  // bad
  if (foo === 123 &&
    bar === 'abc') {
    thing1();
  }

  // bad
  if (foo === 123
    && bar === 'abc') {
    thing1();
  }

  // bad
  if (
    foo === 123 &&
    bar === 'abc'
  ) {
    thing1();
  }

  // good
  if (
    foo === 123
    && bar === 'abc'
  ) {
    thing1();
  }

  // good
  if (
    (foo === 123 || bar === 'abc')
    && doesItLookGoodWhenItBecomesThatLong()
    && isThisReallyHappening()
  ) {
    thing1();
  }

  // good
  if (foo === 123 && bar === 'abc') {
    thing1();
  }
  ```

**在 `if / else / for / do / while` 语句中，即使只有一行，也不能省略块 `{...}`**

  ```javascript
  // bad
  if (condition) callFunc();
  if (condition)
    callFunc();

  // good
  if (condition) {
    callFunc();
  }
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### undefined

  永远不要直接使用 `undefined` 进行变量判断

  使用 `typeof` 和字符串 `undefined` 对变量进行判断

  ```javascript
  // bad
  if (person === undefined) {
    ...
  }

  // good
  if (typeof person === 'undefined') {
    ...
  }
  ```

**[⬆ back to top](#page_with_curl-table-of-contents)**

### HTML

  1. 元素 id 必须保证页面唯一
  2. HTML 属性值使用双引号
  3. 自闭合（self-closing）标签，无需闭合 (例如：img、input、br、hr 等)
  4. 充分利用 HTML 自身属性及样式继承原理减少代码量
  5. 尽量减少标签数量
  6. 需要为 HTML 元素添加自定义属性的时候, 以 `data-` 为前缀来添加自定义属性，避免使用其他命名方式
  7. HTML 属性应该按照特定的顺序出现以保证易读
      1. id
      2. class
      3. name
      4. data-*
      5. src, for, type, href, value, max-length, max, min, pattern
      6. placeholder, title, alt
      7. aria-*, role
      8. required, readonly, disabled
  8. 字符编码 `<meta charset="utf-8">`
  9. 无需使用 `@charset` 指定样式表的编码，它默认为 `UTF-8`
  10. IE 兼容模式 `<meta http-equiv="X-UA-Compatible" content="IE=edge">`
  11. 响应式 `<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">`

**[⬆ back to top](#page_with_curl-table-of-contents)**

### CSS

  1. class 应以功能或内容命名，不以表现形式命名
  2. class 与 id 单词字母小写，多个单词组成时，采用中划线 - 分隔
  3. 省略 "0" 值后面的单位，不要在 0 值后面使用单位，除非有值。用 `margin: 0;` 代替 `margin: 0px;`
  4. 代码缩进与格式: 每个 CSS 属性声明后都要加分号，在紧跟属性名的冒号后使用一个空格
  5. 减少选择器的长度（深度）
  6. 样式名不能包含 `ad`、`guanggao`、`ads`、`gg` 等是广告含义的关键词，避免元素被网页拓展、插件屏蔽

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 组件中的 HTML 格式

  **组件元素有多个属性时闭合标志应`单独占一行`**

```html
<template>
  <!-- 组件元素有多个属性时 -->
  <v-menu
    bottom
    offset-y
    :key="index"
    origin="bottom center"
    transition="scale-transition"
  >
    <v-btn>{{ route.name }}</v-btn>
  </v-menu>

  <!-- 多个属性且无子元素 -->
  <cascader
    v-model="form.team"
    :data="itemsData"
    :clearable="false"
  ></cascader>

  <!-- 自闭合组件 -->
  <my-component />
</template>
```

  [自闭合组件](https://cn.vuejs.org/v2/style-guide/#%E8%87%AA%E9%97%AD%E5%90%88%E7%BB%84%E4%BB%B6-%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 引入 CSS 和 JavaScript 文件

​   根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 `type` 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值

**[⬆ back to top](#page_with_curl-table-of-contents)**

### Vue 组件命名和结构

1. 基本遵循[风格指南](<https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6%E6%96%87%E4%BB%B6%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90>)

2. 组件的命名需遵从以下原则：

    1. **有意义的**: 不过于具体，也不过于抽象
    2. **简短**: 2 到 3 个单词
    3. **具有可读性**: 以便于沟通交流

    ```html
    <!-- Recommended -->
    <app-header />
    <user-list />
    <range-slider />

    <!-- Not recommended -->
    <!-- 虽然简短但是可读性差. 使用 `button-group` 替代 -->
    <btn-group />

    <!-- ui 前缀太过于宽泛，在这里意义不明确 -->
    <ui-slider />

    <!-- 与自定义元素规范不兼容 -->
    <slider />
    ```

3. [基础组件名](https://cn.vuejs.org/v2/style-guide/#%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  **应用特定样式和约定的基础组件 (也就是展示类的、无逻辑的或无状态的组件) 应该全部以一个特定的前缀开头，比如 Base、App 或 V**
4. [单例组件名](https://cn.vuejs.org/v2/style-guide/#%E5%8D%95%E4%BE%8B%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  **只应该拥有单个活跃实例的组件应该以 The 前缀命名，以示其唯一性**
5. [紧密耦合的组件名](https://cn.vuejs.org/v2/style-guide/#%E7%B4%A7%E5%AF%86%E8%80%A6%E5%90%88%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  和父组件紧密耦合的子组件应该以父组件名作为前缀命名
6. [模板中的组件名大小写](https://cn.vuejs.org/v2/style-guide/#%E6%A8%A1%E6%9D%BF%E4%B8%AD%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%A4%A7%E5%B0%8F%E5%86%99%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  我们日常项目中基本不会使用 DOM 模板，这里规定在单文件组件和字符串模板中**组件名总是使用 PascalCase**
  对于绝大多数项目来说，在单文件组件和字符串模板中组件名应该总是 PascalCase 的——但是在 DOM 模板中总是 kebab-case 的
7. [完整单词的组件名](https://cn.vuejs.org/v2/style-guide/#%E5%AE%8C%E6%95%B4%E5%8D%95%E8%AF%8D%E7%9A%84%E7%BB%84%E4%BB%B6%E5%90%8D%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  **组件名应该倾向于完整单词而不是缩写**
8. [多个 attribute 的元素](https://cn.vuejs.org/v2/style-guide/#%E5%A4%9A%E4%B8%AA-attribute-%E7%9A%84%E5%85%83%E7%B4%A0%E5%BC%BA%E7%83%88%E6%8E%A8%E8%8D%90)
  多个 attribute 的元素应该分多行撰写，每个 attribute 一行
9. [组件/实例的选项的顺序推荐](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E7%9A%84%E9%80%89%E9%A1%B9%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90)
  **组件/实例的选项应该有统一的顺序**
10. [元素 attribute 的顺序推荐](https://cn.vuejs.org/v2/style-guide/#%E5%85%83%E7%B4%A0-attribute-%E7%9A%84%E9%A1%BA%E5%BA%8F%E6%8E%A8%E8%8D%90)
  元素 (包括组件) 的 attribute 应该有统一的顺序
11. [组件/实例选项中的空行推荐](https://cn.vuejs.org/v2/style-guide/#%E7%BB%84%E4%BB%B6-%E5%AE%9E%E4%BE%8B%E9%80%89%E9%A1%B9%E4%B8%AD%E7%9A%84%E7%A9%BA%E8%A1%8C%E6%8E%A8%E8%8D%90)
  你可能想在多个 property 之间增加一个空行，特别是在这些选项一屏放不下，需要滚动才能都看到的时候。

  当你的组件开始觉得密集或难以阅读时，在多个 property 之间添加空行可以让其变得容易。在一些诸如 Vim 的编辑器里，这样格式化后的选项还能通过键盘被快速导航

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 项目结构

- 页面组件应放在 `src/views` 文件夹
  - 整体布局的页面组件应放在 `src/views/layouts` 文件夹
  - 登录、系统权限的页面组件应放在 `src/views/auth` 文件夹
  - 通用的页面组件应放在 `src/views/common` 文件夹
  - 管理员属性的页面组件应放在 `src/views/admin` 文件夹
- 独立的组件文件应放在 `src/components` 文件夹
  - '工具'组件应放在 `src/components/widgets` 文件夹
  - '混入'组件应放在 `src/components/mixins` 文件夹
- 工具函数应放在 `src/utils` 文件夹
- 项目插件放在 `src/plugins` 文件夹
- API 放在 `src/api` 文件夹
- 静态文件放在 `src/assets` 文件夹
- 国际化文件放在 `src/i18n` 文件夹
- 其余还有 `src/router`、`src/store` 等

**[⬆ back to top](#page_with_curl-table-of-contents)**

### PS

  1. 文件最后保留一个空行
  2. 行尾不要有空白字符
  3. ~~不要使用 `str.length !== 0` 或 `str.length > 0`  直接使用 `str.length` 即可~~
  4. **简单的 `if {} else {}` 应用三元表达式来代替**
  5. 换行符统一用 'LF'
  6. 不要混用 tab 和 space
  7. 书写代码前, 考虑并提高样式重复使用率
  8. 不要用隐含的类型转换
  9. 用 `parseInt()` 进行数字转换
  10. 构造器首字母大写
  11. 尽量不要用位运算、`continue` 语句
  12. 书写链接地址时, 须避免重定向，例如：`href="https://www.qq.com/"`, 即须在 URL 地址后面加上`/`
  13. 省略外链资源 URL 协议部分: 省略外链资源（图片及其他媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免 [Mixed Content](https://developer.mozilla.org/en-US/docs/Web/Security/Mixed_content) 问题，减小文件字节数。其它协议（ftp 等）的 URL 不省略

  ```html
  <!-- Recommended -->
  <script src="//www.w3cschool.cn/statics/js/autotrack.js"></script>

  <!-- Not recommended -->
  <script src="http://www.w3cschool.cn/statics/js/autotrack.js"></script>
  ```

  14. `,` 和 `;` 前不允许有空格。如果不位于行尾，`,` 和 `;` 后必须跟一个空格
  15. 在运算符处换行时，建议把运算符放在新行的**行首**`'operator-linebreak': ['error', 'before']`，但考虑到目前 [Prettier](https://prettier.io/) 的限制，运算符可以放在句尾，详见：
    1. [Placing operators at the beginning of lines #3806](https://github.com/prettier/prettier/issues/3806)
    2. [JS: Break lines before binary operators (fixes #3806) #7111](https://github.com/prettier/prettier/pull/7111)
  16. 部分 VSCode eslint 配置[详见](https://github.com/yimian/vue-cli-plugin-basis/blob/master/.eslintrc.js)
  17. 部分工具函数 [详见](https://github.com/yimian/vue-cli-plugin-basis/blob/master/generator/template/src/utils/util.js)
  18. 部分 IE Polyfill [详见](https://github.com/yimian/vue-cli-plugin-basis/blob/master/generator/template/src/utils/compatible-ie.js)

**[⬆ back to top](#page_with_curl-table-of-contents)**

### 常用模块命名

- 头：header
- 内容：content/container
- 尾：footer
- 导航：nav
- 侧栏：sidebar
- 栏目：column
- 页面外围控制整体布局宽度：wrapper
- 左右中：left right center
- 登录条：loginbar
- 标志：logo
- 广告：banner
- 页面主体：main
- 热点：hot
- 新闻：news
- 下载：download
- 子导航：subnav
- 菜单：menu
- 子菜单：submenu
- 搜索：search
- 友情链接：friendlink
- 页脚：footer
- 版权：copyright
- 滚动：scroll
- 内容：content
- 标签页：tab
- 文章列表：list
- 提示信息：msg
- 小技巧：tips
- 栏目标题：title
- 加入：joinus
- 指南：guild
- 服务：service
- 注册：regsiter
- 状态：status
- 投票：vote
- 合作伙伴：partner

**[⬆ back to top](#page_with_curl-table-of-contents)**
