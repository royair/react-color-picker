import React from 'react';
import './Pixel.css';


export default function Pixel({ hue, saturation, lightness, onSelect }) {
  const divStyle = {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    width: '1px',
    height: '1px',
  };

  return (
    <div style={divStyle}
         className={'divTableCell'}
          onClick={() => onSelect(0, saturation, lightness)}></div>
  )
};
