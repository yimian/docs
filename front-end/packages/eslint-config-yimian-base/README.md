# eslint-config-yimian-base

​	用于一面内部的eslint配置库，基于以下配置进行部分扩展

```json
  {
    "@rushstack/eslint-patch": "^1.1.4",
    "@typescript-eslint/eslint-plugin": "^5.26.0",
    "@typescript-eslint/parser": "^5.26.0",
    "@vue/eslint-config-prettier": "^7.0.0",
    "@vue/eslint-config-typescript": "^10.0.0",
    "eslint": "^7.32.0 || ^8.2.0",
    "eslint-plugin-import": "^2.26.0",
    "eslint-plugin-vue": "^8.7.1",
    "prettier": "^2.7.1"
  },
```

​	代码具体规范可以查看: `front-end/style-guide.md`



## 安装方法

```shell
npm add --dev @ym/eslint-config-yimian-base @rushstack/eslint-patch
# or 其他包管理工具的安装方式
```

- `@rushstack/eslint-patch`：为了确保配置文件可以在eslint的一些已知限制下更好的工作，依赖该插件配合使用，且该插件也可以使您不需要安装太多的依赖。

安装前请**登录**`nexus`[私服](https://ones.ai/wiki/#/team/49egF9Px/space/CAKmZRGr/page/FUMe6Rvo)，或直接在前端项目中添加`.npmrc`文件，增加相关配置，具体配置细节请看公司私服使用指南

**此外，还需要确保已经安装eslint和prettier**

## 使用方法

增加`eslint-config-yimian-base` or `yimian-base`到项目`eslintrc.cjs`文件的`extends`中。为防止被其他配置覆盖，建议将该项置于扩展数组的最后。

```javascript
/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: [
    // ... other configs
    "@ym/eslint-config-yimian-base"
  ]
}
```





