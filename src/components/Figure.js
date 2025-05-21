import React from 'react';

const Figure = ({ src, caption, width }) => (
  <p align="center">
    <img src={src} alt={caption} style={{width: width ? width : "100%"}} />
    <br/>
    <small style={{color: "gray"}}>{caption}</small>
  </p>
);

export default Figure;