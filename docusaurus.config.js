// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Eden',
  tagline: 'A Garden Of Artificial Delights',
  url: 'https://docs.eden.art',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'abraham-ai', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        pages: {
          path: 'src/pages',
          routeBasePath: '/',
        },
        docs: {
          routeBasePath: '/docs',
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          sidebarCollapsible: false,
          showLastUpdateTime: true,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Eden',
        logo: {
          alt: 'Eden',
          src: 'img/eden.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
            activeBaseRegex: '^/$',
          },
          {
            to: '/docs/category/overview',
            label: 'Docs',
            position: 'left'
          },
          {
            href: 'https://app.eden.art',
            label: 'App',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Links',
            items: [
              {
                label: 'App',
                href: 'https://app.eden.art',
              },
              {
                label: 'Docs',
                to: '/docs/category/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/4dSYwDT',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/eden_art_',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/eden_art_',
              },
            ],
          },
          {
            title: 'Developers',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/github.com/abraham-ai',
              },
              {
                label: 'Eden SDK (JS)',
                href: 'https://www.npmjs.com/package/@edenlabs/eden-sdk',
              },
              {
                label: 'Eden SDK (Python)',
                href: 'https://github.com/abraham-ai/eden-sdk-py',
              },
            ],
          },
        ],
        copyright: ` `, //`Copyright © ${new Date().getFullYear()} Eden, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
