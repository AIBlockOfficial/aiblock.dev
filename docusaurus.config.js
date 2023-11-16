// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A-Block',
  tagline: 'Technical hub for A-Block\'s ecosystem',
  url: 'http://localhost:3000/',
  baseUrl: '/',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: 'ABlockOfficial',
  projectName: 'ablock.docs',

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl:
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem" // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      })
    ]
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          // hideable: true
        }
      },
      navbar: {
        // title: 'A-Block',
        logo: {
          alt: 'Site Logo',
          src: 'img/a_block_logo_full.svg',
          srcDark: 'img/a_block_logo_full.svg',
          href: '#',
          target: '_self',
          width: 150,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            type: "doc",
            docId: "docs/intro",
            position: "left",
            label: "Documentation"
          },
          {
            type: "doc",
            docId: "api/overview",
            position: "left",
            label: "API"
          },
          {
            href: "https://github.com/ABlockOfficial",
            label: "GitHub",
            position: "right"
          }
        ]
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs',
              },
              {
                label: 'API',
                to: '/api',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              //       {
              //         label: 'Stack Overflow',
              //         href: 'https://stackoverflow.com/questions/tagged/ablock',
              //       },
              {
                label: 'Discord',
                href: 'https://discord.gg/dDgabkJMEG',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/ABlockOfficial',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A-Block Technologies AG`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        // additionalLanguages: ["ruby", "csharp", "php", "java", "powershell"],
      },
      // languageTabs: [
      //   {
      //     highlight: "bash",
      //     language: "curl",
      //     logoClass: "bash",
      //   },
      //   {
      //     highlight: "python",
      //     language: "python",
      //     logoClass: "python",
      //     variant: "requests",
      //   },
      //   {
      //     highlight: "go",
      //     language: "go",
      //     logoClass: "go",
      //   },
      //   {
      //     highlight: "javascript",
      //     language: "nodejs",
      //     logoClass: "nodejs",
      //     variant: "axios",
      //   },
      //   {
      //     highlight: "ruby",
      //     language: "ruby",
      //     logoClass: "ruby",
      //   },
      //   {
      //     highlight: "csharp",
      //     language: "csharp",
      //     logoClass: "csharp",
      //     variant: "httpclient",
      //   },
      //   {
      //     highlight: "php",
      //     language: "php",
      //     logoClass: "php",
      //   },
      //   {
      //     highlight: "java",
      //     language: "java",
      //     logoClass: "java",
      //     variant: "unirest",
      //   },
      //   {
      //     highlight: "powershell",
      //     language: "powershell",
      //     logoClass: "powershell",
      //   }
      // ],
      announcementBar: {
        id: "announcementBar_1",
        content:
          "🥳 A-Block.js v2.0 is now available.",
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          mempool: {
            specPath: "openapi/mempool.yml",
            outputDir: "docs/api/mempool",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: false,
            },
            hideSendButton: true,
          },
          storage: {
            specPath: "openapi/storage.yml",
            outputDir: "docs/api/storage",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: false,
            },
            hideSendButton: true,
          }
          /** TODO */
          // miner: {
          //   specPath: "openapi/miner.yml",
          //   outputDir: "docs/miner-api",
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //     categoryLinkSource: "tag"
          // sidebarCollapsible: false,
          //   },
          //   hideSendButton: true,
          // },
        }
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

module.exports = config;
