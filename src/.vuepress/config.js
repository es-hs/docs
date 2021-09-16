
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
        text: "Global Styles",
        link: "/global-styles/",
      },
      {
        text: "Components",
        link: "/components/",
      },
      {
        text: "Online Store",
        link: "/online-store/",
      },
      {
        text: "AWS",
        link: "/aws/",
      },
      {
        text: "Dashboard",
        link: "/dashboard/",
      },
      {
        text: "Editor",
        link: "/editor/",
      },
      {
        text: "Admin",
        link: "/admin/",
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
        "@": "..",
      },
    },
  },
};
