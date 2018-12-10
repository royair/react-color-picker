import React, { Component } from 'react';
import './ColorPicker.css';
import PickedColor from './PickedColor'

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.canvas = null;
    this.state  = {
      pickedColor: { h: 0, s: 0, l: 0 }
    }
  };

  componentDidMount() {
    this.updateCanvas();
  }

  updateCanvas = () => {
    let c              = this.canvas.getContext("2d");
    this.canvas.width  = 101;
    this.canvas.height = 101;

    let width  = this.canvas.width;
    let height = this.canvas.height;

    c.fillStyle = "rgb(0, 0, 0)";

    c.fillRect(0, 0, width, height);

    for (let x = height - 1; x >= 0; x--) {
      for (let y = 0; y < width; y++) {
        c.fillStyle = "hsl(" + 0 + ", " + x + "%, " + y + "%)";
        c.fillRect(x, height - 1 - y, 1, 1);
      }
    }
  };

  onSelect = (e) => {
    const posX = e.pageX - this.canvas.offsetLeft;
    const posY = e.pageY - this.canvas.offsetTop;

    // ignore when mouse clicks on border of canvas
    if (posX < 0 || posY < 0) return;

    const h = 0;
    const s = posX;
    const l = 100 - posY;

    this.setState(() => ({
      pickedColor: {
        h, s, l
      }
    }))
  };

  render() {
    const { pickedColor } = this.state;

    return (
      <div className="container">
        <div className="picker">

          <h1>Color Picker</h1>
          <div className="canvas-wrapper">
            <canvas ref={(elem) => this.canvas = elem}
                    onClick={(e) => this.onSelect(e)}/>
          </div>

          <PickedColor hue={pickedColor.h}
                       saturation={pickedColor.s}
                       lightness={pickedColor.l}/>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
