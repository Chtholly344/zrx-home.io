import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <img src='https://www.helloimg.com/images/2023/04/02/o3jUq6.png' className={styles.logo}></img>
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}> 
        <a href="docs/joinzrx">
          <button className={styles.button1}>
           点击此处查看入团指南</button>
          </a>
          <a href="https://qm.qq.com/cgi-bin/qm/qr?k=11wyQxoAAyx6sqNBunMgDIx_FYhmW20v&authKey=4+eMdHsqHmrMRf/hs9izYvqoXO69bJzHeFjMP/LAM7jyhbkf5uar/U7Y4tKk3E8u&noverify=0&personal_qrcode_source=0">
            <button className={styles.button2}>
           请点击此处加入审核群</button>
          </a>
        </div>
        <div className={styles.textline}>
          <p className={styles.text}>
            只要你热爱二次元并且会一定的剪辑就可以轻松加入<br />
            主招纯剪，排版<br />
            -不限平台-不限软件-<br />
            ZRX漫剪团欢迎您的加入
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} 欢迎您的加入`}
      description="Welcome to this website.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
