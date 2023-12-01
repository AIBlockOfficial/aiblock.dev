import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatureBlock from '@site/src/components/HomepageFeatureBlock';

import blueA from '@site/static/img/blueA.svg';
import greenA from '@site/static/img/greenA.svg';

import styles from './styles.module.css';

/** HOMEPAGE */

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Homepage`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatureBlock {...{
          title: 'The A-Block Digital System', Svg: blueA, description: (
            <>
              Designed to combat the shortcomings of Web2 and propel us towards a more robust Web3, A-Block stands as a transformative force.
              It pioneers a full-stack Layer-0 to Layer-2 blockchain solution, powered by cutting-edge Data Asset™ technology.
              This comprehensive solution encompasses secure payment systems, decentralized applications (dApps), asset management, and decentralized marketplaces.
            </>
          ),
          inversed: true,
        }} />

        <HomepageFeatures title={'Key Advantages of A-Block'} />

        <HomepageFeatureBlock {...{
          title: 'Why A-Block?', Svg: greenA, description: (
            <>
              Integrity forms the bedrock of society, business, relationships, and human interaction.
              However, the rise of Web2, while enabling widespread access to information, compromised privacy and integrity.
              A-Block emerged to tackle these challenges head-on, presenting innovative technology tailored for both interpersonal and organizational collaboration.
            </>
          )
        }} />


      </main>
    </Layout>
  );
}
