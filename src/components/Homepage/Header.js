import VideoBackground from '../VideoBackground';
import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/24/solid'

const videoPlaceholder = 'data:image/png;base64,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'

const Header = () => {
  return (
    <VideoBackground videoUrl='/video/video_bg_real2real.mp4' placeholderUrl={videoPlaceholder}>
      <div className="relative flex flex-col items-center justify-center z-10  h-[calc(100%_-_120px)] p-4">
        <div className="max-w-5xl flex-shrink-0">
          <h1 className="font-bold text-4xl sm:text-6xl tracking-tight text-white">
            Create, remix, and share AI art
          </h1>
          <p className="mt-3 font-extralight text-xl leading-8 text-gray-300">
            Eden is a community of artists and technologists building a social hub for creative AI.
          </p>
          <div className="mt-6 flex">
            <a href="https://app.eden.art" className="hover:no-underline block" >
              <button
                className="flex gap-2 items-center text-lg bg-white hover:bg-gray-900 bg-opacity-10 hover:bg-opacity-70 cursor-pointer text-white pl-4 pr-4 pt-3 pb-3 border-2 border-solid border-white rounded-2xl font-bold tracking-wide transition-all hover:scale-105"
              >
                Enter the Garden
                <ChevronRightIcon className="h-6 w-6" />
              </button>
            </a>
          </div>
        </div>
      </div>
    </VideoBackground>
  )
}

export default Header