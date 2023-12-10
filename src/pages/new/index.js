import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import styles from './index.module.css';
import VideoBackground from '../../components/VideoBackground';
import Header from '../../components/Homepage/Header';
import Content from '../../components/Homepage/Content';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Eden | Garden Of Artificial Delights`}
      description="Garden Of Artificial Delights"
    >
      <main>
        <Header />
        <Content />
      </main>
    </Layout>
  );
}
