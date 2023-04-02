import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '0f2'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '760'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '1dc'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'f52'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'b11'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', 'e2a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'eb5'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '0fa'),
    exact: true
  },
  {
    path: '/blog/关于网站管理员',
    component: ComponentCreator('/blog/关于网站管理员', 'd01'),
    exact: true
  },
  {
    path: '/blog/友链',
    component: ComponentCreator('/blog/友链', '782'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '787'),
    exact: true
  },
  {
    path: '/blog/ZRX漫剪团管理员',
    component: ComponentCreator('/blog/ZRX漫剪团管理员', 'b66'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '8dc'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e00'),
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
    component: ComponentCreator('/', 'c93'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
