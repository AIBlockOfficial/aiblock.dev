// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'A-Block',
  tagline: 'Technical hub for A-Block\'s ecosystem',
  favicon: 'img/favicon.ico',
  url: 'http://localhost:3000/',
  baseUrl: '/',

  // GitHub pages deployment config.
  organizationName: 'ABlockOfficial',
  projectName: 'ablock.docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      {
        api: {
          path: "./static/openapi/API/mempool_api.yml",
          routeBasePath: "/mempool",
        },
        docs: false,
        // {
        //   sidebarPath: require.resolve("./sidebars.js"),
        //   routeBasePath: "/docs",
        // },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],

  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "api",
        path: "./static/openapi/API",
        routeBasePath: "api",
      },
    ],
    [
      "docusaurus-plugin-openapi",
      {
        id: "storage",
        path: "static/openapi/API/storage_api.yml",
        routeBasePath: "/api/storage",
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'A-Block',
        logo: {
          alt: 'Site Logo',
          src: 'img/logo.png',
          srcDark: 'img/logo_dark.png',
          href: '/api',
          target: '_self',
          width: 32,
          height: 32,
          className: 'custom-navbar-logo-class',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'docSidebar',
          //   position: 'left',
          //   label: 'Docs',
          // },
          {
            // type: 'apiSidebar',
            // sidebarId: 'apiSidebar',
            href: '/api',
            label: 'API',
            position: 'left',
            routeBasePath: '/api',
          },
          {
            href: 'https://github.com/ABlockOfficial/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Developer Docs',
        //         to: '#',
        //       },
        //       {
        //         label: 'API',
        //         to: '/api',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/ablock',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discord.gg/dDgabkJMEG',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/ABlockOfficial',
        //       },
        //       {
        //         label: 'Docs Website',
        //         href: 'https://github.com/ABlockOfficial/ablock.docs',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} A-Block, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;