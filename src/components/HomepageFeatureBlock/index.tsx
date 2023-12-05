import React from 'react';

import PlaceholderImg from '@site/src/components/PlaceholderImg'

import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg?: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
  inversed?: boolean;
  bg?: boolean;
};

// export default function HomepageFeatureBlock({ title, Svg, description }: FeatureItem, inversed: boolean): JSX.Element {
export default function HomepageFeatureBlock({ title, Svg, description, bg = false, inversed = false }: FeatureItem): JSX.Element {
  return (
    <section className={`${styles.feature} ${bg ? styles.bg : ''}`}>
      {!inversed &&
        <>
          <div className={styles.content}>
            <h2>{title}</h2>
            {description}
          </div>
          <div className={styles.image}>
            {Svg ?
              <Svg className={styles.svg} role="img" />
              :
              <PlaceholderImg />
            }
          </div>
        </>
      }
      {inversed &&
        <>
          <div className={styles.image}>
            {Svg ?
              <Svg className={styles.svg} role="img" />
              :
              <PlaceholderImg />
            }
          </div>
          <div className={styles.content}>
            <h2>{title}</h2>
            {description}
          </div>
        </>
      }
    </section>
  );
}


{/* {Svg ?? <Svg className={styles.featureSvg} role="img" /> : <PlaceholderImg />} */ }
