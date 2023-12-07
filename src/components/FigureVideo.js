import React from 'react';

const FigureVideo = ({ src, caption, w = "100%", h = "auto" }) => (
  <p align="center">
    <div style={{position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden'}}>
      <iframe style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} src={src} title={caption} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen />
  </div>
  <small style={{color: "gray"}}>{caption}</small>
  </p>
);

export default FigureVideo;