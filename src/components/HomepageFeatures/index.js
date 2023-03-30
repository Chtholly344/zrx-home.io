import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '建团时间',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        ZRX漫剪团成立于2022年12月15日，截至2023年3月27日，团内成员已达到290+
      </>
    ),
  },
  {
    title: '氛围良好',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        团内聊天环境良好，团员发言积极踊跃，管理活跃富有责任心
      </>
    ),
  },
  {
    title: '素材众多',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        自建团三个多月以来，群内已上传素材10GB+,另有其他素材分群，群内包含AM,NV,MN等主流手机剪辑软件安装包
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
