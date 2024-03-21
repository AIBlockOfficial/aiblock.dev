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
      label: "Welcome",
      link: {
        type: "doc",
        id: "welcome"
      },
      collapsible: false,
      items: [
        {
          type: "category",
          label: "Fundamentals and Concepts",
          link: {
            type: "doc",
            id: "network-wiki"
          },
          collapsible: true,
          items: [
            {
              type: "autogenerated",
              dirName: "network-wiki"
            },
          ]
        },
        {
          type: "category",
          label: "Tutorials",
          link: {
            type: "doc",
            id: "tutorials-overview"
          },
          items: [
            {
              type: "category",
              label: "2Way.js",
              link: {
                type: "doc",
                id: "2wayjs-tutorials"
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "2wayjs-tutorials"
                },
              ],
            },
            {
              type: "category",
              label: "Valence Node",
              link: {
                type: "doc",
                id: "valence-node"
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "valence-node"
                },
                {
                  type: "category",
                  label: "Valence Core",
                  link: {
                    type: "doc",
                    id: "valence-core"
                  },
                  items: [
                    {
                      type: "autogenerated",
                      dirName: "valence-core"
                    }
                  ]
                }
              ],
            },
            {
              type: "category",
              label: "API Usage",
              link: {
                type: "doc",
                id: "api-tutorials"
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "api-tutorials"
                },
              ],
            },
            {
              type: "category",
              label: "Mining",
              link: {
                type: "doc",
                id: "mining-overview"
              },
              items: [
                {
                  type: "autogenerated",
                  dirName: "mining"
                },
              ],
            },
          ],
        }
      ]
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
            type: "doc",
            id: "api/mempool/mempool-api"
          },
          // @ts-ignore
          items: require("./docs/api/mempool/sidebar.js").slice(1)
        },
        {
          type: "category",
          label: "Storage",
          link: {
            type: "doc",
            id: "api/storage/storage-api"
          },
          // @ts-ignore
          items: require("./docs/api/storage/sidebar.js").slice(1)
        },
        {
          type: "category",
          label: "Miner",
          link: {
            type: "doc",
            id: "api/miner/miner-api"
          },
          // @ts-ignore
          items: require("./docs/api/miner/sidebar.js").slice(1)
        }
      ]
    },
    {
      type: "doc",
      label: "Postman Collections",
      id: "postman-collections"
    },
  ],
};

module.exports = sidebars;