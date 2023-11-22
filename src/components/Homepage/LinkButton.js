import React from 'react';

const LinkButton = ({href, text}) => {
  return (
    <a href={href}>
      <button
        className="cursor-pointer pl-4 pr-4 pt-3 pb-3 border-none rounded-md font-bold tracking-wide transition-transform hover:scale-105"
      >
        {text}
      </button>
    </a>
  )
}

export default LinkButton