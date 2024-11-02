---
layout: home
---

## New issue

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