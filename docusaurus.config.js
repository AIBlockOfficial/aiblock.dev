// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

const { DOCUSAURUS_VERSION } = require("@docusaurus/utils");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'AIBlock',
  url: 'http://localhost:3100/',
  baseUrl: '/',
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.png",
  organizationName: 'AIBlockOfficial',
  projectName: 'aiblock.dev',

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
            docId: "welcome",
            position: "left",
            label: "Documentation"
          },
          {
            type: "doc",
            docId: "api/overview",
            position: "left",
            label: "API"
          },
          // {
          //   href: "https://discord.gg/dDgabkJMEG",
          //   position: "right",
          //   className: "header-ico .header-discord-link",
          //   "aria-label": "AIBlock Discord",
          // },
          {
            href: "https://github.com/AIBlockOfficial",
            position: "right",
            className: "header-ico header-github-link",
            "aria-label": "AIBlock GitHub",
          },
          {
            href: "https://linktr.ee/ai3lock",
            label: "More",
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
                to: '/docs/api/overview',
              },
              {
                label: 'Tutorials',
                to: '/docs/tutorials-overview',
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
              {
                label: 'GitHub',
                href: 'https://github.com/AIBlockOfficial',
              },
              {
                label: 'More',
                href: 'https://linktr.ee/ai3lock',
              }
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Terms of Use',
                to: 'legal/termsofuse',
              },
              {
                label: 'Privacy Policy',
                to: 'legal/privacypolicy',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} AIBlock Technologies AG`,
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
            specPath: "openapi/mempool_openapi.yml",
            outputDir: "docs/api/mempool",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: false,
            },
            hideSendButton: true,
          },
          storage: {
            specPath: "openapi/storage_openapi.yml",
            outputDir: "docs/api/storage",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: false,
            },
            hideSendButton: true,
          },
          miner: {
            specPath: "openapi/miner_openapi.yml",
            outputDir: "docs/api/miner",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
              sidebarCollapsible: false,
            },
            hideSendButton: true,
          },
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
