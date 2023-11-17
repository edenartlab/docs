import React from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import VideoBackground from '../../components/VideoBackground';

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Eden | Garden Of Artificial Delights`}
      description="Garden Of Artificial Delights"
    >
      <main>
        <VideoBackground src={'/video/video_bg_real2real.mp4'}>
          <div className="relative flex flex-col items-center justify-center z-10  h-[calc(100%_-_120px)]">
            <div className="max-w-3xl flex-shrink-0">
              <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
                Create, remix, and share AI art
              </h1>
              <p className="mt-3 font-extralight text-xl leading-8 text-gray-300">
                Eden is a community of artists and technologists building a social hub for creative AI.
              </p>
              <div className="mt-6">
                <a href="https://app.eden.art">
                  <button
                    className="cursor-pointer text-white pl-4 pr-4 pt-3 pb-3 border-2 rounded-2xl font-bold tracking-wide transition-transform hover:scale-105"
                  >
                    Enter the Garden
                  </button>
                </a>
              </div>
          </div>
        </div>
      </VideoBackground>

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
