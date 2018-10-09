const React = require('react');
const ReactDOM = require('react-dom');
let Button = require('./Button');

let Random = React.createClass({
  getInitialState: function () {
    return { color: [3, 152, 199] }
  },

  componentDidMount: function () {
    this.applyColor();
  },

  formatColor: function (arr) {
    return 'rgb(' + arr.join(', ') + ')';
  },

  handleClick: function () {
    this.setState({ color: this.chooseColor() });
  },

  isLight: function () {
    let rgb = this.state.color;
    return rgb.reduce(function(a,b){ return a+b; }) < 127 *3;
  },

  applyColor: function () {
    let color = this.formatColor(this.state.color);
    document.body.style.background = color;
  },

  chooseColor: function () {
    for (let i =0; random = []; i< 3; i++) {
      random.push(Math.floor(Math.random() * 256));
    }
    return random;
  },

  render: function () {
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          My color is {this.formatColor(this.state.color)}
        </h1>
        <Button light={this.isLight()} onClick={this.handleClick} />
      </div>
    );
  }
});

ReactDOM.render(
  <Random />,
  document.getElementById('app')
);