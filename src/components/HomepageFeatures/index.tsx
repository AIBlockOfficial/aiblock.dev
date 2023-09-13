import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Developer Documentation',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse sed metus ante. Donec nec vehicula.
      </>
    ),
  },
  {
    title: 'API',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Maecenas eget lectus vitae eros accumsan commodo.
        Nulla vitae ipsum semper, porttitor felis eget <code>docs</code> mollis diam. Donec molestie sed erat.
      </>
    ),
  },
  {
    title: 'Powered by A-Block',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        In quis justo at mi euismod elementum. In quis metus tortor. Mauris bibendum enim risus.
        Curabitur odio libero, sodales et.
      </>
    ),
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
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

export default function HomepageFeatures(): JSX.Element {
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
