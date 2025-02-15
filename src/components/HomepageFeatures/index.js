import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FirstRowFeatureList = [
  {
    title: 'Using the creation tool',
    img: require('@site/static/img/home/create.jpg').default,
    link: "/docs/guides/agents", 
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/agents"
          >
            Using the creation tool
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Training custom models',
    img: require('@site/static/img/home/concept2.jpg').default,
    link: "/docs/guides/concepts",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/concepts">
            Training custom models
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Making agents and bots',
    img: require('@site/static/img/home/banny.jpg').default,
    link: "/docs/guides/agents",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/agents">
            Making agents and bots
          </Link>
        </div>
      </>
    ),
  },
];


const SecondRowFeatureList = [
  {
    title: 'SDK Quickstart',
    img: require('@site/static/img/home/sdk.jpg').default,
    link: "/docs/guides/sdk",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/sdk"
          >
            SDK quickstart
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'Deploy a bot to Discord or Telegram',
    img: require('@site/static/img/home/comfyui.jpg').default,
    link: "/docs/guides/discord",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/guides/discord">
            Deploy a bot to Discord or Telegram
          </Link>
        </div>
      </>
    ),
  },
  {
    title: 'About Eden',
    img: require('@site/static/img/eden.png').default,
    link: "/docs/overview/intro",
    description: (
      <>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/overview/intro">
            About Eden
          </Link>
        </div>
      </>
    ),
  },
];


//creation, concepts, characters, sdk, custom hosted endpoints

function Feature({img, title, description, link, col}) {
  return (
    <div className={clsx(`col col--${col}`)}>
      <div className="text--center">
        {/* <Svg className={styles.featureSvg} role="img" /> */}
        <a href={link}>
          <img alt='feature' className={styles.featureSvg} role="img" src={img} />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        {/* <h3>{title}</h3> */}
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
          {FirstRowFeatureList.map((props, idx) => (
            <Feature key={idx} {...props} col={4} />
          ))}
        </div>
        <br/>
        <div className="row">
          {SecondRowFeatureList.map((props, idx) => (
            <Feature key={idx} {...props} col={4} />
          ))}
        </div>
      </div>
    </section>
  );
}
