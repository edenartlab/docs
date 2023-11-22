import VideoBackground from '../VideoBackground';
import React from 'react';

const Header = () => {
  return (
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
                className="cursor-pointer text-white pl-4 pr-4 pt-3 pb-3 border-2 border-solid bg-transparent border-white rounded-2xl font-bold tracking-wide transition-transform hover:scale-105"
              >
                Enter the Garden
              </button>
            </a>
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}

export default Header