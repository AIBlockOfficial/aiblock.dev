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
          <h1 className="hero__title">Welcome to ABlock</h1>
          <p>
            ABlock is a layer 1 blockchain that provides builders with a quick, easy, and low risk way to build decentralized applications. It's designed 
            to let you build without tricky, risky smart contracts, and without the need to learn a new programming language. Use our low code solutions to get 
            creating, issuing and making asset trades in seconds.
          </p>
          <div className={styles.blockButton}>
            <a className="button button--primary button--lg" href="/docs/">
              Developer Documentation
            </a>
          </div>
        </div>

        <HomepageFeatures bg={true} title={'Key Advantages of ABlock'} />

        <div className={styles.block}>
          <h2>Get Started</h2>
          <p>You can start building and using the ABlock tooling by exploring the documentation and API</p>
          <div className={styles.blockButton}>
            <a className="button button--primary button--lg" href="/docs/">
              Developer Documentation
            </a>
          </div>
        </div>


      </main>
    </Layout>
  );
}
