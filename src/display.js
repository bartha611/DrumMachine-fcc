import React, { Component } from 'react';

class Display extends Component {
  render() {
    return (
      <div id = "display">
        <p>{this.props.letter}</p>
      </div>
    )
  }
}

export default Display;