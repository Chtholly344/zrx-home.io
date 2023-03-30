// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ZRX漫剪团',
  tagline: 'Animation Editing Group',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://doucusaurus-352.netlify.app',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Chtholly344', // Usually your GitHub org/user name.
  projectName: 'zrx-home', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true
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
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'ZRX-Group',
        logo: {
          alt: 'My Site Logo',
          src: 'http://p.qlogo.cn/gh/692390247/692390247/100/',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '更多信息',
          },
          {
            to: '/blog',
            position: 'left',
            label: '文章',
          },
          {
            href: 'https://github.com/Chtholly344/zrx-home',
            label: 'Github',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '加入我们',
            items: [
              {
                label: 'QQ审核群',
                href: 'https://qm.qq.com/cgi-bin/qm/qr?k=11wyQxoAAyx6sqNBunMgDIx_FYhmW20v&authKey=4+eMdHsqHmrMRf/hs9izYvqoXO69bJzHeFjMP/LAM7jyhbkf5uar/U7Y4tKk3E8u&noverify=0&personal_qrcode_source=0',
              },
            ],
          },
          {
            title: '更多',
            items: [
              {
                label: '联系网站管理员',
                to: 'https://qm.qq.com/cgi-bin/qm/qr?k=60gs5tRrajst0VNKX3wYMDbxyd7fwJLa&noverify=0&personal_qrcode_source=3',
              },
              {
                label: '关于该网站',
                href: '../docs/aboutweb',
              },             
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Chtholly344, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
