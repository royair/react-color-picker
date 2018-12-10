import React from 'react';
import './PickedColor.css';


export default function PickedColor({ hue, saturation, lightness }) {
  const divStyle = {
    backgroundColor: `hsl(${hue}, ${saturation}%, ${lightness}%)`,
    width: '100px',
    height: '50px',
    display: 'inline-block'
  };

  return (
    <div>
      <div className={'pickedColorBox'} style={divStyle}></div>

      <form>
        <input type="text" onChange={() => {
        }} value={`hsl(${hue}%, ${saturation}%, ${lightness}%)`}/>
      </form>
    </div>
  )
};
