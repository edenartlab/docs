import React from 'react'
import styles from './index.module.css'

export default function VideoBackground({children, src}) {
  return (
    <div className="relative h-screen bg-black">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40 pointer-events-none"
      >
        <source src={src} type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
      {children}
    </div>
  )
}