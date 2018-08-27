import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button.js';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [] };
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){
    this.newColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.newColor();
  }

  formatColor(array) {
    return 'rgb(' + array.join(', ') + ')';
  }

  isLight(){
    const rgb = this.state.color;
    return rgb.reduce((a,b) => a+b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for(let i = 0; i < 3; i++){
      random.push(Math.floor(Math.random() * 256));
    }
  }

  handleClick() {
    this.setState({
      color : this.chooseColor()
    });
  }


  render(){
    return(
      <div>
        <h2 className={this.isLight() ? 'white' : 'black'}>Color {this.formatColor(this.state.color)}!
        </h2>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);