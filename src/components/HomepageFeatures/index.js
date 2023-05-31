import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';


const FeatureList = [
  {
    name: '铃芽户缔',
    title: '建团时间',
    Svg: require('@site/static/img/01.svg').default,
    description: (
      <>
        ZRX漫剪团成立于2022年12月15日，截至2023年5月31日，团内成员已达到320+
      </>
    ),
  },
  {
    name: '亚托莉 -我挚爱的时光-',
    title: '氛围良好',
    Svg: require('@site/static/img/02.svg').default,
    description: (
      <>
        团内聊天环境良好，团员发言积极踊跃，管理活跃富有责任心,遇到困难可向管理寻求帮助
      </>
    ),
  },
  {
    name: '孤独摇滚',
    title: '素材众多',
    Svg: require('@site/static/img/03.svg').default,
    description: (
      <>
        自建团五个多月以来，群内已上传素材10GB+,群内包含AM,NV,MN等主流手机剪辑软件安装包，AE等可向管理 Chtholly 获取
      </>
    ),
  },
];

function Feature({Svg, name, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className={styles.fanming}>
        <h1>{name}</h1>
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
