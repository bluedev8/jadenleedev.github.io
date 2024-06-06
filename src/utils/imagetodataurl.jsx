import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import domtoimage from 'dom-to-image';
import { Icon } from '@iconify/react';

export const IconToDataURL = ({ icon, size, onLoad }) => {
  useEffect(() => {
    const svgElement = document.createElement('div');
    svgElement.style.width = `${size}px`;
    svgElement.style.height = `${size}px`;
    document.body.appendChild(svgElement);

    ReactDOM.render(<Icon icon={icon} width={size} height={size} />, svgElement, () => {
      domtoimage.toPng(svgElement)
        .then((dataUrl) => {
          onLoad(dataUrl);
          document.body.removeChild(svgElement);
        })
        .catch((error) => {
          console.error('oops, something went wrong!', error);
          document.body.removeChild(svgElement);
        });
    });
  }, [icon, size, onLoad]);

  return null;
};
