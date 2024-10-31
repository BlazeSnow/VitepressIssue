import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "test",
  description: "test",
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      {
        text: 'Examples',
        items: [
          {
            text: 'test',
            activeMatch: '/test/',
            link: '/test/',
          }
        ]
      }
    ],
    sidebar: [
      {
        text: 'test',
        items: [
          { text: 'test1', link: '/test/' },
          { text: 'test2', link: '/test/test' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/BlazeSnow/VitepressIssue' }
    ]
  }
})
