const path = require('path');
let srcPath = path.resolve(__dirname, '../')
module.exports = {
  dest: 'docs',
  base: '/docs/',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Headless Storefront Dev",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "Tài liệu hướng dẫn cho lập trình viên Headless Storefront",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "meta",
      { name: "robots", content: "noindex" },
    ],
    [
      "script",
      {},
      `
        window.onload = function() {
          requestAnimationFrame(function() {
            if (location.hash) {
              const element = document.getElementById(location.hash.slice(1));

              if (element) {
                element.scrollIntoView();
              }
            }
          });
        };
      `,
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Introduce",
        link: "/introduce/",
      },
      {
        text: "Frontend",
        link: "/frontend/",
        items: [
          {
            text: "Customer",
            items: [
              {
                text: "Global Styles",
                link: "/frontend/global-styles/"
              },
              {
                text: "Online Store",
                link: "/frontend/online-store/",
              },
              {
                text: "Components",
                link: "/frontend/components/",
              },
            ]
          },
          {
            text: "System",
            items: [
              {
                text: "Dashboard",
                link: "/frontend/dashboard/",
              },
              {
                text: "Editor",
                link: "/frontend/editor/",
              },
              {
                text: "Admin",
                link: "/frontend/admin/",
              }
            ]
          },
        ]
      },
      {
        text: "Backend",
        link: "/backend/",
        items: [
          {
            text: "General",
            items: [
              {
                text: "AWS",
                link: "/backend/aws/",
              },
              {
                text: "Code Conversion",
                link: "/backend/code-conversion/",
              },
            ]
          },
          {
            text: "System",
            items: [
              {
                text: "Online Store",
                link: "/backend/online-store/",
              },
              {
                text: "Build Code",
                link: "/backend/build-code/",
              },
              {
                text: "Dashboard Editor",
                link: "/backend/dashboard-editor/",
              },
            ]
          },
        ]
      },
      {
        text: "Changelog",
        link: "/changelog/",
      },
      {
        text: "Github",
        link: "https://github.com/es-hs",
      },
    ],
    sidebar: {
      "/global-styles/": [
        {
          title: "Global Styles",
          collapsable: false,
          children: [""],
        },
      ],
      "/components/": [
        {
          title: "Components",
          collapsable: false,
          children: ["", "atoms"],
        },
      ],
      "/changelog/": [],
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "vuepress-plugin-smooth-scroll",
  ],
  configureWebpack: {
    resolve: {
      alias: {
        "@": srcPath,
      },
    },
  },
};
