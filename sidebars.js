/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  docsSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest);margin: 0px">DOCUMENTATION</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "intro"
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "A-Block.js",
          link: {
            type: "doc",
            id: "basic-tutorials"
          },
          items: [
            {
              type: "autogenerated",
              dirName: "basic-tutorials"
            },
          ],
        },
        {
          type: "category",
          label: "Valence Nodes",
          link: {
            type: "doc",
            id: "valence-nodes"
          },
          items: [
            {
              type: "autogenerated",
              dirName: "valence-nodes"
            },
          ],
        },
      ],
    },
  ],
  apiSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest);margin: 0px">API</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    {
      type: "category",
      label: "Core Endpoints",
      link: {
        type: "doc",
        id: 'api/overview'
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Mempool",
          link: {
            type: "generated-index",
            title: "Mempool API",
            description: "Mempool API generated with swagger",
            slug: "/api/mempool"
          },
          // @ts-ignore
          items: require("./docs/api/mempool/sidebar.js")
        },
        {
          type: "category",
          label: "Storage",
          link: {
            type: "generated-index",
            title: "Storage API",
            description: "Storage API generated with swagger",
            slug: "/api/storage"
          },
          // @ts-ignore
          items: require("./docs/api/storage/sidebar.js")
        }
      ]
    },
  ],
};

module.exports = sidebars;