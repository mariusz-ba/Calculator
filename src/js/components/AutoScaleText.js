import React, { Component } from 'react';

export default class AutoScaleText extends Component {
  state = {
    scale: 1
  }

  componentDidUpdate() {
    const { scale } = this.state;

    const node = this.node;
    const parentNode = node.parentNode;

    const availableWidth = parentNode.offsetWidth;
    const actualWidth = node.offsetWidth;
    const actualScale = availableWidth / actualWidth;

    if(scale === actualScale)
      return;
    
    if(actualScale < 1) {
      this.setState({ scale: actualScale })
    } else if (scale < 1) {
      this.setState({ scale: 1 })
    }
  }

  render() {
    const { scale } = this.state;

    return (
      <div 
        ref={node => this.node = node}
        style={{transform: `scale(${scale},${scale})`}}
        className="auto-scale-text"
      >
        {this.props.children}
      </div>
    )
  }
}