import { defineConfig } from 'vitepress'

export default defineConfig({
    title: "BlazeSnow - VitepressIssue",
    description: "BlazeSnow - VitepressIssue",
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
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
                    },
                ]
            },
            {
                text: 'Done',
                activeMatch: '/Done/',
                items: [
                    {
                        text: '4163',
                        activeMatch: '/Done/4163',
                        link: '/Done/4163',
                    },
                    {
                        text: '4408',
                        activeMatch: '/Done/4408',
                        link: '/Done/4408',
                    },
                ]
            },
        ],
        sidebar: {
            '/test/': [
                {
                    text: 'test',
                    items: [
                        { text: 'test1', link: '/test/' },
                        { text: 'test2', link: '/test/test' },
                    ]
                }
            ],
            '/another/': [
                {
                    text: 'another',
                    items: [
                        { text: 'test3', link: '/another/' },
                        { text: 'test4', link: '/another/test' },
                    ]
                }
            ],
            '/Done/': [
                {
                    text: 'Done',
                    items: [
                        { text: '4163', link: '/Done/4163' },
                        { text: '4408', link: '/Done/4408' },
                    ]
                }
            ],
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/BlazeSnow/VitepressIssue' }
        ]
    }
})
