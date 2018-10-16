import React from 'react';

class Button extends React.Componet{
  render() {
    return <React.Fragment>
      <button className={this.props.light ? 'light-button' : 'dark-button' } onClick={this.props.onClick}>
        Click Me!
      </button>
    </React.Fragment>
  }
};

export default Button;