import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '37b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '8de'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'e06'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'fd9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '373'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '1ae'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'ab3'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', 'fe1'),
    exact: true
  },
  {
    path: '/blog/关于网站管理员',
    component: ComponentCreator('/blog/关于网站管理员', '5ba'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c7c'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', 'a7a'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', '391'),
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
    component: ComponentCreator('/', '110'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
