import React from 'react';

const Figure = ({ src, caption }) => (
  <p align="center">
    <img src={src} alt={caption} />
    <br/>
    <small style={{color: "gray"}}>{caption}</small>
  </p>
);

export default Figure;