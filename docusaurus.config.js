// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A-Block',
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
          routeBasePath: "/docs",
          sidebarPath: require.resolve("./sidebars.js"),
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
        }
      },
      navbar: {
        logo: {
          alt: 'Site Logo',
          src: 'img/a_block_logo_full.svg',
          srcDark: 'img/a_block_logo_full.svg',
          href: '/',
          target: '_self',
          width: 150,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          {
            type: "doc",
            docId: "intro",
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
                to: '/api/overview',
              },
              {
                label: 'Tutorials',
                to: '/docs/basic-tutorials/get-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
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
