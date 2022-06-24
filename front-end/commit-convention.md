# Git Commit Message Convention
> This is adapted from [Git Commit Message Convention](https://github.com/vuejs/core/blob/main/.github/commit-convention.md)
and [Commit Message Header](https://github.com/angular/angular/blob/main/CONTRIBUTING.md#commit-message-header)
---

## 1. Commit Message Header

`<type>(<scope>?): <subject>`

```text
<type>(<scope>): <subject>
  │       │             │
  │       │             └─⫸ Subject in present tense. Not capitalized. No period at the end.
  │       │
  │       └─⫸ Commit Scope: The scope could be anything specifying the place of the commit change.
  |                          For example components, ym-ui, core, deps, utils, locale, packaging, etc...
  │
  └─⫸ Commit Type: build|chore|ci|docs|feat|fix|perf|refactor|revert|release|style|test|ui|wip
```

- `<type>` 和 `<subject>` 是必填字段, `(<scope>)` 字段是可选的.
- 可以填多个 `<scope>`（用 `', '` 分隔）
- `<type>` 和 `<scope>` 使用小写字符
- 更多默认设置请参考：[@commitlint/config-conventional](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional)

### 1.1 Type
#### 1.1.1 [type-enum](https://github.com/conventional-changelog/commitlint/tree/master/@commitlint/config-conventional#type-enum):

- build: 构建工具或外部依赖的改动
- chore: 其余修改（不适用于已有 Type 的改动）
- ci: 与 CI（持续集成服务）有关的改动
- docs: 文档修改（documentation）
- feat: 新功能（feature）
- fix: bug 修复
- perf: 优化相关，如：提升性能、体验等
- refactor: 代码重构
- revert: 回滚到上一个版本，执行 `git revert` 打印的 message
- release: 版本发布
- style: 代码格式，不影响代码含义的改动，如：去掉空格、改变缩进、增删分号
- test: 新增测试或修改现有测试
- ui: CSS 样式相关改动
- wip: 正在开发中尚未完成（work in process）

#### 1.1.2 [commitlint configuration](https://commitlint.js.org/#/reference-configuration?id=configuration)

- `npm install --save-dev @commitlint/{cli,config-conventional}`

- `commitlint.config.ts`:

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

### 1.2 [Subject](https://github.com/vuejs/core/blob/main/.github/commit-convention.md#subject)

使用 `subject` 字段为更改提供简洁的描述:

- 使用祈使句(Imperative Sentence)、现在时(Present tense)：如应该使用 change 而不是 changed 也不是 changes
- 第一个字母不要大写
- 结尾没有点(.)

### 1.3 [Examples](https://github.com/vuejs/core/blob/main/.github/commit-convention.md#examples)

- Appears under "Features" header, `compiler` subheader:

`feat(compiler): add 'comments' option`

- Appears under "Bug Fixes" header, v-model subheader

`fix(v-model): handle events on blur`

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

1. [Angular](https://github.com/angular/angular/commits/main)
2. [Vue.js](https://github.com/vuejs/core/commits/main)
3. [Element Plus](https://github.com/element-plus/element-plus/commits/dev)
