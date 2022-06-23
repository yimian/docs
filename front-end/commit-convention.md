# Git Commit Message Convention
> This is adapted from [Git Commit Message Convention](https://github.com/vuejs/core/blob/main/.github/commit-convention.md)
and [Commit Message Header](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-message-header)
---

## 1. Commit Message Header

`<type>(<scope>?): <short summary>`

```text
<type>(<scope>): <short summary>
  │       │             │
  │       │             └─⫸ Summary in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: The scope could be anything specifying the place of the commit change.
  |                          For example components, ym-ui, core, deps, utils, locale, packaging, etc...
  │
  └─⫸ Commit Type: build|chore|ci|docs|feat|fix|perf|refactor|revert|style|test
```

The `<type>` and `<summary>` fields are mandatory, the `(<scope>)` field is optional.
multiple scopes are supported (current delimiter options: "/", "\" and ",")

### 1.1 Type

[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)
[type-enum](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum):

- build: 构造工具的或者外部依赖的改动
- chore：不修改 src 或者 test 的其余修改
- ci: 与 CI（持续集成服务）有关的改动
- docs：文档修改（documentation）
- feat：新功能（feature）
- fix：A bug fix
- perf: 优化相关，比如提升性能、体验
- refactor：代码重构（即不是新增功能，也不是修改 bug 的代码变动）
- revert: 回滚到上一个版本，执行 git revert 打印的 message
- release: 版本发布
- style：格式，不影响代码含义的改动，例如：去掉空格、改变缩进、增删分号
- test：添加缺失的测试或纠正现有的测试
- ui: css 样式改动相关
- wip: 正在开发中尚未完成（work in process）

#### 1.1.1 [commitlint configuration](https://commitlint.js.org/#/reference-configuration?id=configuration)

```typescript
import type { UserConfig } from '@commitlint/types'

const Configuration: UserConfig = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'build',
        'chore',
        'ci',
        'docs',
        'feat',
        'fix',
        'perf',
        'refactor',
        'revert',
        'release',
        'style',
        'test',
        'ui',
        'wip',
      ],
    ],
  },
}

module.exports = Configuration

```

### 1.2 [Summary](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#summary)

使用 `summary` 字段为更改提供简洁的描述:

- 使用祈使句(Imperative Sentence)、现在时(Present tense)：如应该使用 change 而不是 changed 也不是 changes
- 第一个字母不要大写
- 结尾没有点(.)

### 1.3 [Examples](https://github.com/vuejs/core/blob/main/.github/commit-convention.md#examples)

- Appears under "Features" header, `compiler` subheader:
`feat(compiler): add 'comments' option`

- Appears under "Performance Improvements" header, and under "Breaking Changes" with the breaking change explanation:

```text
perf(core): improve vdom diffing by removing 'foo' option

BREAKING CHANGE: The 'foo' option has been removed.
```

## 2. [为什么使用约定式提交？](https://www.conventionalcommits.org/en/v1.0.0-beta.2/#why-use-conventional-commits)

- 每个人的风格不同，提交的格式凌乱，统一格式便于他人查看
- **部分提交没有填写信息，以后难以得知修改的原因**
- **可以自动生成 CHANGELOG**
- 基于提交的类型，自动决定语义化的版本变更
- 向同事、公众与其他利益关系者传达变化的性质
- 触发构建和部署流程
- 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度

**禁止使用 `--force`。如果发现有无效提交、错误提交，使用一个新的 commit 进行纠正**

- 善用 [git rebase](https://git-scm.com/docs/git-rebase)

## 3. Tools

### 3.1 [husky](https://github.com/typicode/husky)

> Modern native Git hooks made easy

### 3.2 [commitlint](https://github.com/conventional-changelog/commitlint)

> Lint commit messages

---

- [cz-cli](https://github.com/commitizen/cz-cli): The commitizen command line utility.
- [cz-customizable](https://github.com/leoforfree/cz-customizable): A customizable commitizen adapter for [cz-cli](https://github.com/commitizen/cz-cli)(or standalone util)

<!-- markdownlint-disable-next-line -->
## e.g.

1. [Angular commits](https://github.com/angular/angular/commits/main)
