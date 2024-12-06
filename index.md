---
layout: home
---

<br>
<br>

# BlazeSnow - VitepressIssue

## Introduction

此页面的所有二级标题"##"均为未解决的问题。此页面的英文采用机器翻译，可能产生歧义，请以中文为准。已解决的问题将会被移到"Done"文件夹。

All secondary headings on this page "##" are unresolved issues. The English of this page is translated by machine, which may cause ambiguity. Please refer to the Chinese version. Resolved issues will be moved to the "Done" folder.

## vercel has a Chinese path problem

> 该问题似乎只出现于Google Chrome，使用Microsoft Edge时无法复现问题。
>
> The issue appears to be specific to Google Chrome and does not appear to be repeated when using Microsoft Edge.

使用`vercel.com`，当网页的路径中存在中文时，如：`/cnpath/中文.html`，网页会先报错`404`，刷新后报错`500`，显示`MIDDLEWARE_INVOCATION_FAILED`。

Using `vercel.com`， when a Chinese character exists in the path of a webpage, such as `/cnpath/中文.html`， the webpage will first return an error of `404`， then refresh and return an error of `500` with the message `MIDDLEWARE_INVOCATION_FAILED`.

![picture](/1.png)

![picture](/2.png)

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