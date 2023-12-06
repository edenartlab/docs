import React from 'react';
import {Section} from './Section';

const Content = () => {
  return (
    <div className="flex justify-center">
      <div className="p-4 max-w-5xl">
        <div className="grid grid-cols-2 gap-8 mb-12">
          <Section
            title={'By artists, for artists'}
            text={'Eden is built by OG AI artists with the express purpose of armoring digital artists with this technology. Artists train your own personal models and reclaim your sovereignty in this technology.'}
            linkHref={'/docs/overview/intro'}
            linkText={'Learn more about our team and values'}
            orientation={'left'}
          />
          <Section
            title={'Open source, open access'}
            text={'Eden pipelines are built on top of and contribute to the open-source Al revolution, and encourages free modification and experimentation on our tools. There are no walls around our garden.'}
            linkHref={'/docs/guides/sdk'}
            linkText={'Learn more in our SDK documentation'}
            orientation={'left'}
          />
        </div>

        <div className="mb-12">
          <Section
            title={'Create, remix, and share your art'}
            text={'Eden maintains an ever-growing suite of customizable pipelines that generate the most sublime and glorious image and video art.'}
            linkHref={'https://app.eden.art/create/creations'}
            linkText={'Create art in 1 minute on Eden'}
            // imageUrl={'/img/eden.png'}
            orientation={'left'}
          />
        </div>

        <div className="mb-12">
          <Section
            title={'Train custom models on your own work'}
            text={'For too long, artists have been left out of the process of training foundation models on their work. Reclaim your sovereignty, train your own model on your work, and serve it to your fans.'}
            linkHref={'/docs/guides/concepts'}
            linkText={'Learn more about model training on Eden'}
            // imageUrl={'/img/eden.png'}
            orientation={'right'}
          />
        </div>

        <div className="mb-12">
          <Section
            title={'Build creative autonomous agents who represent you (Beta)'}
            text={'Eden is developing an experimental chatbot who represents your artistic brand. Like a concierge who talks to your fans, sketches new works in your style, and handles commissions for new work.'}
            linkHref={'/docs/guides/characters'}
            linkText={'Learn more and apply to the beta program'}
            // imageUrl={'/img/eden.png'}
            orientation={'left'}
          />
        </div>
      </div>
    </div>
  )
}

export default Content