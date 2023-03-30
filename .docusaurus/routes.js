import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '1e0'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '4a5'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '2ad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '6bb'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '4ac'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '6b9'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', 'c6a'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '407'),
    exact: true
  },
  {
    path: '/blog/关于网站管理员',
    component: ComponentCreator('/blog/关于网站管理员', '7e6'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '3d7'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '0f3'),
    exact: true
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'cd0'),
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
    component: ComponentCreator('/', '2cd'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
