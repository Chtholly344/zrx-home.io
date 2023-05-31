import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '7e2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8ce'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '6b3'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'a96'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'd81'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '969'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '644'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'a54'),
    exact: true
  },
  {
    path: '/blog/关于网站管理员',
    component: ComponentCreator('/blog/关于网站管理员', 'd66'),
    exact: true
  },
  {
    path: '/blog/友链',
    component: ComponentCreator('/blog/友链', 'd31'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '970'),
    exact: true
  },
  {
    path: '/blog/ZRX漫剪团管理员',
    component: ComponentCreator('/blog/ZRX漫剪团管理员', '238'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'd26'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'bbe'),
    routes: [
      {
        path: '/docs/aboutweb',
        component: ComponentCreator('/docs/aboutweb', 'ca7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/aboutZRX',
        component: ComponentCreator('/docs/aboutZRX', 'd26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/joinzrx',
        component: ComponentCreator('/docs/joinzrx', '042'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/sagiribot',
        component: ComponentCreator('/docs/sagiribot', 'ae8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/zhenxunbot',
        component: ComponentCreator('/docs/zhenxunbot', 'b6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', '03c'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
