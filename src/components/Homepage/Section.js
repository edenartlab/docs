import LinkButton from './LinkButton';
import React from 'react';

/**
 * @param title {string|React.ReactElement}
 * @param text {string|React.ReactElement}
 * @param linkHref {string}
 * @param linkText {string}
 * @param orientation {'left'|'right'}
 * @param imageUrl {string}
 * @returns {Element}
 * @constructor
 */
export const Section = ({title, text, linkHref, linkText, orientation, imageUrl}) => {
  return (
    <div className="flex flex-col items-start h-full">
      <div className="flex gap-4">
        {imageUrl ?
          <img src={imageUrl} alt={linkText} className="h-36 w-36"/>
          : null
        }
        <div className={orientation === 'right' ? 'order-first' : ''}>
          <h2 className="mb-2">{title}</h2>
          <div className="mb-4">{text}</div>
          <div className={`mt-auto`}>
            <LinkButton href={linkHref} text={linkText}/>
          </div>
        </div>
      </div>
    </div>
  )
}