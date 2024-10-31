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
            text: 'another',
            activeMatch: '/another/',
            link: '/another/',
          }
        ]
      },
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
      '/another/': [
        {
          text: 'another',
          items: [
            { text: 'test3', link: '/another/' },
            { text: 'test4', link: '/another/test' }
          ]
        }
      ]
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlazeSnow/VitepressIssue' }
    ]
  }
})
