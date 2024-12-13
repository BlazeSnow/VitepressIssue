---
layout: doc
---

# BlazeSnow - VitepressIssue

## Introduction

此页面的所有二级标题"##"均为未解决的问题。此页面的英文采用机器翻译，可能产生歧义，请以中文为准。已解决的问题将会被移到"Done"文件夹。

All secondary headings on this page "##" are unresolved issues. The English of this page is translated by machine, which may cause ambiguity. Please refer to the Chinese version. Resolved issues will be moved to the "Done" folder.

## navbar has problems with activematch

<https://github.com/vuejs/vitepress/issues/4332>

无论在Examples的activematch输入任何内容，test被高亮时，Examples总是会高亮。

Whenever you enter anything in the Examples' activematch, the Examples will always be highlighted when test is highlighted.

```typescript{3}
      {
        text: 'Examples',
        activeMatch: '/whatever/',
        items: [
          {
            text: 'test',
            activeMatch: '/test/',
            link: '/test/',
          },
          {
            text: 'another',
            activeMatch: '/another/',
            link: '/another/',
          }
        ]
      },
```