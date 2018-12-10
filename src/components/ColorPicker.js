import React, { Component } from 'react';
import './ColorPicker.css';
import Pixel from './Pixel'
import PickedColor from './PickedColor'

class ColorPicker extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pickedColor: { h: 0, s: 0, l: 0 }
    }
  }

  onSelect = (h, s, l) => {
    console.log('onselect!');
    this.setState(() => ({
      pickedColor: {
        h, s, l
      }
    }))
  };

  createTable = () => {
    let table = [];

    for (let i = 100; i >= 0; i--) {
      let children = [];

      for (let j = 0; j < 101; j++) {
        children.push(<Pixel key={`${i}${j}`}
                             hue={0}
                             saturation={j}
                             lightness={i}
                             onSelect={this.onSelect}
                             className={'divTableCell'}/>)
      }

      table.push(<div key={i} className={'divTableRow'}>{children}</div>)
    }

    return table
  };


  render() {
    const { pickedColor } = this.state;

    return (
      <div class="container">
        <div className="picker">
          <h1>Color Picker</h1>
          <div className={'divTable'}>
            <div className={'divTableBody'}>
              {this.createTable()}
            </div>
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
