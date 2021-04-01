# 编码规范

**代码规范旨在增强团队开发协作、提高代码质量，统一团队成员 JS 语法风格和书写习惯，减少程序出错的概率。让代码容易被理解和被维护，便于成员间能以更低的成本（时间、精力。。。）熟悉对方的代码。其中也包含了部分 ES6 的语法规范和最佳实践。**

现有规范:

1. [Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)
2. [Vue 风格指南](https://cn.vuejs.org/v2/style-guide/)
3. [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)

***这里基于上面已有规范做一些特殊说明、修改、强调和归纳提炼，着重于 Javascript，更多信息请查看上面的链接***

**下面的规范如有觉得不合理或有更好的建议请提 PR 或联系田益铭**

------

### :page_with_curl: Index

1. [命名规范](#命名规范)

#### 1.命名规范

- 项目、文件命名统一采用小写英文字母，多个单词的使用中划线 '-' 连接，禁止包含空格和特殊符号，比如：`my-project-name`
- CSS 文件命名: `suffix.css(.scss)`, 共用 `global.css`, 首页 `index.css`, 其他依实际模块需求命名
- JS 文件命名: `suffix.js`, 共用 `common.js`, 其他依实际模块需求命名
- 有复数结构时，要采用复数命名法，比如说： scripts, styles, images, data-models
- 以字母开头命名
- 常用模块命名见文末

#### 2. 基本原则

**结构、样式、行为分离**

> 尽量确保文档和模板只包含 HTML 结构，样式都放到样式表里，行为都放到脚本里。
>
> 基于模块开发：始终基于模块的方式来构建你的 app，每一个子模块只做一件事情。

Vue 项目：
统一采用下面的形式

（只有较特殊且针对单个组件的样式才应该放在组件里，其余的样式应该合理地放到 `styles` 文件夹里）

```html
<template>...</template>
<script>/* ... */</script>
<style>/* ... */</style>
```

#### 3. 缩进

> 统一两个空格缩进（anyway: 不要使用 `Tab` 或者 `Tab`、空格混搭)。

#### 4. [注释](https://github.com/airbnb/javascript#comments)

- 单行注释

  缩进与下一行被注释说明的代码一致
  - HTML

    `<!--<div class="sell"></div>-->`

  - JS
  使用 `//`，且必**须独占一行**。

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

  - 尽量避免使用 `/*...*/` 这样的多行注释。有多行注释内容时，使用多个单行注释

- 函数注释

  ```javascript
  /**
   * 函数描述
   *
   * @param {string} p1 参数 1 的说明
   * @param {string} p2 参数 2 的说明，比较长
   *     那就换行了.
   * @param {number=} p3 参数 3 的说明（可选）
   * @return {Object} 返回值描述
   */
  function foo(p1, p2, p3) {
    var p3 = p3 || 10;
    return {
      p1: p1,
      p2: p2,
      p3: p3,
    };
  }
  ```

- 善用 `FIXME:` 和 `TODO:`

#### 5. 标点符号

1. 每个表达式语句后面须加分号
2. JS 代码中优先使用单引号，最外层统一使用单引号

```javascript
// bad
const x = "test";

// good
const y = 'foo';
const z = '<div id="test"></div>';
```

#### 6. 变量命名

- 标准变量采用驼峰式命名
- 常量全大写，用下划线连接
- 构造函数，第一个字母大写
- `boolean` 类型的变量使用 `is` 或 `has` 开头
- `类名` 使用 `名词`

  ```javascript
  function Engine(options) {
  }
  ```

#### 7. 函数命名

**命名规则** : 前缀为动词，使用 `动宾短语`，可读性强，见名晓义

| 动词 | 含义                            | 返回值                                                |
| ---- | ------------------------------- | ----------------------------------------------------- |
| can  | 判断是否可执行某个动作 ( 权限 ) | 函数返回一个布尔值。true：可执行；false：不可执行     |
| has  | 判断是否含有某个值              | 函数返回一个布尔值。true：含有此值；false：不含有此值 |
| is   | 判断是否为某个值                | 函数返回一个布尔值。true：为某个值；false：不为某个值 |
| get  | 获取某个值                      | 函数返回一个非布尔值                                  |
| set  | 设置某个值                      | 无返回值、返回是否设置成功或者返回链式对象            |

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

#### 8. 换行，空行

1. [对所有多行代码块使用大括号](https://github.com/airbnb/javascript#blocks)

  ```javascript
    // bad
    if (test)
      return false;

    // good
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
  ```

2. 每行代码不超过 120 个字符
3. 逻辑块之间加空行增加可读性
4. 每个 `let`、`const` 只能声明一个变量，且变量声明后需要空行（当变量声明在代码块的最后一行时，则无需空行）
5. 注释前需要加空行（当注释在代码块的第一行时，则无需空行）
6. 文件最后保留一个空行

  ```javascript
  // bad
  var hangModules = [],
      missModules = [],
      visited = {};

  // good
  var hangModules = [];
  var missModules = [];
  var visited = {};
  ```

#### 13. 留空

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
  for (let i = 0, j = arr.length; i < j; i += 1) {
    // Do something.
  }
  ```

2. 操作符两端添加空格

#### 9. [控制语句 Control Statements](https://github.com/airbnb/javascript#control-statements)
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

  在 `if / else / for / do / while` 语句中，即使只有一行，也不得省略块 `{...}`

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

#### 9. 常量

- **命名方法** : 全部大写
- **命名规范** : 使用大写字母和下划线来组合命名，下划线用以分割单词

```javascript
const MAX_COUNT = 10;
const URL = 'https://www.google.com';
```

- Android、iOS

#### 10. 对象

1. 使用字面量值创建对象

```javascript
// bad
const a = new Object();

// good
const a = {};
```

2. 当使用动态属性名创建对象时，请使用对象计算属性名来进行创建

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

3. 使用对象方法、属性的简写方式

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

4. 只对非法标识符的属性使用引号
5. 优先使用对象展开运算符 `...` 来做对象浅拷贝而不是使用 `Object.assign`


#### 10. 数组

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

// good
const nodes = Array.from(foo);

// best
const nodes = [...foo];
```

11. 迭代器

不要使用 iterators，建议使用 JS 更高优先级的函数代替 `for-in` 或 `for-of` 循环，除非迫不得已

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

#### 10. 括号

下列关键字后必须有大括号（**即使代码块的内容只有一行**），且需要单独换行：

```basic
`if` ,  `else`, `for`,  `while`, `do`, `switch`, `try`, `catch`,  `finally`,  `with`。
```

```javascript
// bad
if (condition) doSomething();

// good
if (condition) {
  doSomething();
}
```

#### 10. undefined

  永远不要直接使用 `undefined` 进行变量判断；

  使用 `typeof` 和字符串 `undefined` 对变量进行判断。

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

#### 11. [解构赋值](https://github.com/airbnb/javascript#destructuring)

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

#### 11. 组件中的 HTML 格式

  组件元素有多个属性时闭合标志应单独占一行

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

#### 12. 引入 CSS 和 JavaScript 文件

​   根据 HTML5 规范，在引入 CSS 和 JavaScript 文件时一般不需要指定 `type` 属性，因为 `text/css` 和 `text/javascript` 分别是它们的默认值。

#### 15. HTML

  1. HTML 属性值使用双引号
  2. 自闭合（self-closing）标签，无需闭合 ( 例如：img、input、br、hr 等 )
  3. 充分利用 HTML 自身属性及样式继承原理减少代码量
  4. 尽量减少标签数量
  5. 需要为 HTML 元素添加自定义属性的时候, 以 `data-` 为前缀来添加自定义属性，避免使用其他命名方式;
  6. HTML 属性应该按照特定的顺序出现以保证易读
        1. id
        2. class
        3. name
        4. data-*
        5. src, for, type, href, value, max-length, max, min, pattern
        6. placeholder, title, alt
        7. aria-*, role
        8. required, readonly, disabled
  7. 字符编码 `<meta charset="utf-8">`
  8. 无需使用 `@charset` 指定样式表的编码，它默认为 `UTF-8`
  9. IE 兼容模式 `<meta http-equiv="X-UA-Compatible" content="IE=edge">`
  10. 响应式 `<meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=no">`

#### 16. CSS

  1. class 应以功能或内容命名，不以表现形式命名
  2. class 与 id 单词字母小写，多个单词组成时，采用中划线 - 分隔
  3. 省略 "0" 值后面的单位。不要在 0 值后面使用单位，除非有值。用 `margin: 0;` 代替 `margin: 0px;`
  4. 代码缩进与格式: 每个 CSS 属性声明后都要加分号，在紧跟属性名的冒号后使用一个空格
  5. 减少选择器的长度（深度）
  6. 样式名不能包含 ad、guanggao、ads、gg 等是广告含义的关键词，避免元素被网页拓展、插件屏蔽

#### 17. Vue 组件命名 和 文件夹结构

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

##### 项目结构

- 控制整体布局的文件放在 `layouts` 文件夹
- 一些独立的组件应放在 `src/components` 文件夹

#### PS

  1. 文件最后保留一个空行
  2. 行尾不要有空白字符
  3. 不要使用 `str.length !== 0` 或 `str.length > 0`  直接使用 `str.length` 即可
  4. **简单的 `if {} else {}` 应用三元表达式来代替**
  5. 换行符统一用 'LF'
  6. 不要混用 tab 和 space
  7. 书写代码前, 考虑并提高样式重复使用率
  8. 书写链接地址时, 必须避免重定向，例如：`href="https://www.qq.com/"`, 即须在URL地址后面加上`/`
  9. 不要用隐含的类型转换
  10. 用 `parseInt()` 进行数字转换
  11. 构造器首字母大写
  12. 尽量不要用位运算、`continue` 语句
  13. 省略外链资源 URL 协议部分: 省略外链资源（图片及其它媒体资源）URL 中的 http / https 协议，使 URL 成为相对地址，避免 Mixed Content 问题，减小文件字节数。其它协议（ftp 等）的 URL 不省略
  14. 使用 === 和 !== 而非 == 和 !=
  15. `,` 和 `;` 前不允许有空格。如果不位于行尾，`,` 和 `;` 后必须跟一个空格
  16. 运算符处换行时，运算符必须在新行的行首

   ```html
   <!-- Recommended -->
   <script src="//www.w3cschool.cn/statics/js/autotrack.js"></script>

   <!-- Not recommended -->
   <script src="http://www.w3cschool.cn/statics/js/autotrack.js"></script>
   ```

  14. 函数参数不要使用 `arguments`，选择 Rest 使用 `...` 代替

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

  15. 部分 VSCode eslint [配置详见](https://github.com/yimian/vue-cli-plugin-basis/blob/master/.eslintrc.js)

#### 常用模块命名

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
