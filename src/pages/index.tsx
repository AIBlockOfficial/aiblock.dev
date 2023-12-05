import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageFeatureBlock from '@site/src/components/HomepageFeatureBlock';

import blueA from '@site/static/img/blueA.svg';
import greenA from '@site/static/img/greenA.svg';

import styles from './styles.module.css';
import heroImg from '../../static/img/utopia.jpg';

/** HOMEPAGE */

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="hero container">
        <img src={heroImg} />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <Layout
      title={`Welcome`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <div className={styles.heroIntro}>
          <h1 className="hero__title">Welcome to A-Block</h1>
          <p>
            A-Block is a layer 1 blockchain that provides builders with a quick, easy, and low risk way to build decentralized applications. It's designed 
            to let you build without tricky, risky smart contracts, and without the need to learn a new programming language. Use our low code solutions to get 
            creating, issuing and making asset trades in seconds.
          </p>
        </div>

        <HomepageFeatures bg={true} title={'Key Advantages of A-Block'} />

        {/* <HomepageFeatureBlock {...{
          title: 'Why A-Block?', Svg: greenA, bg: true, description: (
            <>
              Integrity forms the bedrock of society, business, relationships, and human interaction.
              However, the rise of Web2, while enabling widespread access to information, compromised privacy and integrity.
              A-Block emerged to tackle these challenges head-on, presenting innovative technology tailored for both interpersonal and organizational collaboration.
            </>
          )
        }} /> */}


      </main>
    </Layout>
  );
}
