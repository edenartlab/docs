import React from 'react'
import styles from './index.module.css'

export default function VideoBackground({children, videoUrl, placeholderUrl}) {
  return (
    <div className="relative h-screen bg-black">
      <div className="opacity-40">
        <img src={placeholderUrl} alt="hero-real2real" className="absolute inset-0 w-full h-full"/>
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        >
          <source src={videoUrl} type="video/mp4"/>
          Your browser does not support the video tag.
        </video>
      </div>
      {children}
    </div>
  )
}