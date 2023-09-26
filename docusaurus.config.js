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
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
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
          {
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            position: 'left',
            label: 'Docs',
          },
          // {
          //   type: 'apiSidebar',
          //   sidebarId: 'apiSidebar',
          //   href: '/api',
          //   label: 'API',
          //   position: 'left',
          //   routeBasePath: '/api',
          // },
          {
            href: 'https://github.com/ABlockOfficial/',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Developer Docs',
                to: '#',
              },
              {
                label: 'API',
                to: '/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/ablock',
              },
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
              {
                label: 'Docs Website',
                href: 'https://github.com/ABlockOfficial/ablock.docs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} A-Block, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

};

module.exports = config;

//   themeConfig:
//     /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
//     ({
//       navbar: {
//         title: 'A-Block',
//         logo: {
//           alt: 'Site Logo',
//           src: 'img/logo.png',
//           srcDark: 'img/logo_dark.png',
//           href: '/api',
//           target: '_self',
//           width: 32,
//           height: 32,
//           className: 'custom-navbar-logo-class',
//         },
//         items: [
//           {
//             type: 'docSidebar',
//             sidebarId: 'docSidebar',
//             position: 'left',
//             label: 'Docs',
//           },
//           {
//             type: 'apiSidebar',
//             sidebarId: 'apiSidebar',
//             href: '/api',
//             label: 'API',
//             position: 'left',
//             routeBasePath: '/api',
//           },
//           {
//             href: 'https://github.com/ABlockOfficial/',
//             label: 'GitHub',
//             position: 'right',
//           },
//         ],
//       },
//       footer: {
//         links: [
//           {
//             title: 'Docs',
//             items: [
//               {
//                 label: 'Developer Docs',
//                 to: '#',
//               },
//               {
//                 label: 'API',
//                 to: '/api',
//               },
//             ],
//           },
//           {
//             title: 'Community',
//             items: [
//               {
//                 label: 'Stack Overflow',
//                 href: 'https://stackoverflow.com/questions/tagged/ablock',
//               },
//               {
//                 label: 'Discord',
//                 href: 'https://discord.gg/dDgabkJMEG',
//               },
//             ],
//           },
//           {
//             title: 'More',
//             items: [
//               {
//                 label: 'GitHub',
//                 href: 'https://github.com/ABlockOfficial',
//               },
//               {
//                 label: 'Docs Website',
//                 href: 'https://github.com/ABlockOfficial/ablock.docs',
//               },
//             ],
//           },
//         ],
//         copyright: `Copyright © ${new Date().getFullYear()} A-Block, Inc. Built with Docusaurus.`,
//       },
//       prism: {
//         theme: lightCodeTheme,
//         darkTheme: darkCodeTheme,
//       },
//     }),
