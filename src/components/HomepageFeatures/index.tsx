import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import PlaceholderImg from '../PlaceholderImg';

import plug from "@site/static/img/plug_icon.svg";
import lightning from "@site/static/img/lightning_icon.svg";
import easy from "@site/static/img/easy_icon.svg";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  bg?: boolean;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'No Smart Contracts Required',
    Svg: easy,
    description: (
      <>Mint, create, pay and trade without any smart contracts at all. No complicated contracting languages, no specialization, no worries</>
    ),
  },
  {
    title: 'API for Everything',
    Svg: plug,
    description: (
      <>Implementing dApps via API routes makes everything quicker and easier, no matter what language you're coming from</>
    ),
  },
  {
    title: 'Quick Settlement',
    Svg: lightning,
    description: (
      <>High speed settlement and deterministic block times means you get transactions through faster and cheaper</>
    ),
  },
];

function Feature({ title, Svg, description, bg = false }: FeatureItem) {
  return (
    <div className={`${clsx('col col--4')} ${bg ? styles.bg : ''}`}>
      <div className="text--center">
      <Svg className={styles.featureSvg} role="img" />
        {/* {Svg ?
          <PlaceholderImg />
          :
          <Svg className={styles.featureSvg} role="img" />
        } */}
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures({ title, bg }: { title: string, bg: boolean }): JSX.Element {
  return (
    <section className={`${styles.features} ${bg ? styles.bg : ''}`}>
      <div className="container">
        <h1 className={styles.title}>{title}</h1>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
