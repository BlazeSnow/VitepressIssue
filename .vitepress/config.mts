import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "test",
  description: "test",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Examples',
        activeMatch: '/test/',
        items: [
          {
            text: 'test',
            activeMatch: '/test/',
            link: '/test/',
          },
          {
            text: 'anothertest',
            activeMatch: '/anothertest/',
            link: '/anothertest/',
          }
        ]
      }
    ],
    sidebar: {
      '/test/': [
        {
          text: 'test',
          items: [
            { text: 'test1', link: '/test/' },
            { text: 'test2', link: '/test/test' }
          ]
        }
      ],
      '/anothertest/': [
        {
          text: 'anothertest',
          items: [
            { text: 'test3', link: '/anothertest/' },
            { text: 'test4', link: '/anothertest/test' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlazeSnow/VitepressIssue' }
    ]
  }
})
