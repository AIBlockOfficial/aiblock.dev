import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import PlaceholderImg from '../PlaceholderImg';

import greenA from "@site/static/img/greenA.svg";

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Cost-Efficient Transactions',
    Svg: greenA,
    description: (
      <>A-Block's Full Stack system ensures reduced fees with a single transaction fee, bypassing vulnerabilities of Layer-2-based technologies.</>
    ),
  },
  {
    title: 'Enhanced Flexibility',
    Svg: greenA,
    description: (
      <>Implementing dApps via API Routes fosters a more adaptable approach compared to rigid Smart Contracts.</>
    ),
  },
  {
    title: 'Tailored Solutions',
    Svg: greenA,
    description: (
      <>A-Block offers opportunities for personalized (White Label) marketplaces and Seek3r Wallets, empowering user ownership.</>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
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

export default function HomepageFeatures({ title }: { title: string }): JSX.Element {
  return (
    <section className={styles.features}>
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
