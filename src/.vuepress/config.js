
module.exports = {
  dest: 'docs',
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
        text: "Components",
        link: "/components/",
      },
    ],
    sidebar: {
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
