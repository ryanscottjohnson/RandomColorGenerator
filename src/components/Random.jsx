import React from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import Button from './Button';

class Random extends React.Component {

  getInitialState() {
    return { color: [3, 152, 199] }
  };

  componentDidMount() {
    this.applyColor();
  };

  formatColor() {
    return 'rgb(' + arr.join(', ') + ')';
  };

  handleClick() {
    this.setState({ color: this.chooseColor() });
  };

  isLight() {
    let rgb = this.state.color;
    return rgb.reduce(function(a,b){ return a+b; }) < 127 *3;
  };

  applyColor() {
    let color = this.formatColor(this.state.color);
    document.body.style.background = color;
  };

  // TODO: refactor function
  chooseColor() {
    for (let i = 0; random = []; i < 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }

    return random;
  };

  // TODO: test render
  render() {
    return (<React.Fragement>
        <div>
          <h1 className={this.isLight() ? 'white' : 'black'}>
            Color {this.formatColor(this.state.color)}
          </h1>
          <Button light={this.isLight()} onClick={this.handleClick} />
        </div>
      </ React.Fragement>
    )
  }
}

export default Random;