import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Eden | Garden Of Artificial Delights`}
      description="Garden Of Artificial Delights"
    >
      <main>
        <div className="p-4">
          <h4>new homepage</h4>
          <div>
            <div>tailwind dummy</div>
            <div className="bg-gray-500">always gray</div>
            <div className="bg-gray-500 dark:bg-blue-600">light: gray, dark: blue</div>
          </div>

        </div>
      </main>
    </Layout>
  );
}
