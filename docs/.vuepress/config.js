module.exports = {
    title: "forapi.cn", // 站点名称
    description: "学习记录 代码分享 经验总结 开发教程", // 描述
    lange: "zh-CN", // 语言
    theme: require.resolve("./theme/"), // 使用自定义主题
    markdown: {
        // markdown 配置
        lineNumbers: true,
    },
    themeConfig: {
        // @vuepress/theme-blog 配置
        // dateFormat: "YYYY-MM-DD",
        // nav: [
        //     // 导航
        //     {
        //         text: "Home",
        //         link: "/",
        //     },
        //     {
        //         text: "Blog",
        //         link: "/posts/",
        //     },
        //     {
        //         text: "Tags",
        //         link: "/tag/",
        //     },
        //     {
        //         text: "Components",
        //         link: "/components/",
        //     },
        // ],
        // directories: [
        //     // {
        //     //       // 主页配置，自定义主题就是为了这
        //     //       id: "home",
        //     //       dirname: "_posts",
        //     //       path: "/",
        //     //       layout: "IndexHome", // 自定义首页布局组件
        //     //   },
        //     {
        //         id: "post",
        //         dirname: "_posts",
        //         path: "/posts/",
        //         itemPermalink: "/posts/:year/:month/:day/:slug",
        //     },
        // ],
        footer: {
            // 页脚
            contact: [{
                type: "github",
                link: "https://github.com/zhb333/readme-blog",
            }, ],
            copyright: [{
                    text: "粤ICP备20016112号",
                    link: "http://beian.miit.gov.cn",
                },
                {
                    text: "MIT Licensed | Copyright © 2020-present forapi.cn",
                    link: "https://github.com/zhb333/readme-blog",
                },
            ],
        },
        sitemap: {
            // Sitemap generator plugin for vuepress.
            hostname: "http://forapi.cn",
        },

        // feed: {
        //     // RSS, Atom, and JSON feeds generator plugin for VuePress 1.x
        //     canonical_base: "http://forapi.cn",
        // },

        smoothScroll: true, // allows you to enable smooth scrolling
    },
};