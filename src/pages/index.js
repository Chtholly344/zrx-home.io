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
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p className={styles.textline}>
          -不限平台-不限软件-不限年龄-
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="../docs/joinzrx">
            -点此查看入团指南-
          </Link>
        </div>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            href="https://qm.qq.com/cgi-bin/qm/qr?k=11wyQxoAAyx6sqNBunMgDIx_FYhmW20v&authKey=4+eMdHsqHmrMRf/hs9izYvqoXO69bJzHeFjMP/LAM7jyhbkf5uar/U7Y4tKk3E8u&noverify=0&personal_qrcode_source=0">
           -点击此处加入审核群-
          </Link>
        </div>
        <h2 className={styles.textline2}>
          只要你热爱二次元并且会一定的剪辑就可以轻松加入
        </h2>
        <p className={styles.textline3}>
          -主招纯剪，排版-
        </p>
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
