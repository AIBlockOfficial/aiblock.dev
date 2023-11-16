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
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // autogenSidebar: [
  //       {
  //     type: "html",
  //     value: `<p style="color: var(--ifm-color-secondary-darkest)">DOCUMENTATION</p>`, // The HTML to be rendered
  //     defaultStyle: true, // Use the default menu item styling
  //   },
  //   { type: "autogenerated", dirName: "." }],
  docsSidebar: [
    {
      type: "html",
      value: `<p style="color: var(--ifm-color-secondary-darkest);margin: 0px">DOCUMENTATION</p>`, // The HTML to be rendered
      defaultStyle: true, // Use the default menu item styling
    },
    // {
    //   type: "doc",
    //   id: "docs/intro",
    // },
    {
      type: "category",
      label: "Introduction",
      link: {
        type: "doc",
        id: "docs/intro"
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "A-Block.js",
          link: {
            type: "doc",
            id: "docs/basic-tutorials"
          },
          items: [
            {
              type: "autogenerated",
              dirName: "docs/basic-tutorials"
            },
          ],
        },
        {
          type: "category",
          label: "Valence Nodes",
          link: {
            type: "doc",
            id: "docs/valence-nodes"
          },
          items: [
            {
              type: "autogenerated",
              dirName: "docs/valence-nodes"
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
    // {
    //   type: "category",
    //   label: "Basic Tutorials",
    //   // link: {
    //   //   type: 'doc',
    //   //   id: 'basic-tutorials'
    //   // },
    //   collapsible: true,
    //   items: require("./docs/basic-tutorials/sidebar.js")
    // },
    // {
    //   type: "category",
    //   label: "Build Apps",
    //   collapsible: true,
    //   items: require("./docs/build-apps/sidebar.js")
    // },
    // {
    //   type: "category",
    //   label: "Run a Valence Node",
    //   collapsible: true,
    //   items: require("./docs/valence-nodes/sidebar.js")
    // },
    // {
    //   type: "category",
    //   label: "Miner",
    //   link: {
    //     type: "generated-index",
    //     title: "Miner API",
    //     description: "Miner API generated with swagger",
    //     slug: "/miner-api"
    //   },
    //   // @ts-ignore
    //   items: require("./docs/miner-api/sidebar.js")
    // },
  ],
};

module.exports = sidebars;