import React from 'react';
import './Example.css';

class Example extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hover: false }
  }

  handleMouseIn() {
    this.setState({ hover: true })
  }

  handleMouseOut() {
    this.setState({ hover: false })
  }

  render() {
    const tooltipStyle = {
      display: this.state.hover ? 'block' : 'none'
    }

    return (
      <div className="container">
        <button id="btn" onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>PRESS</button>
        <div>
          <div id="tooltip" style={tooltipStyle}>this is the tooltip!!</div>
        </div>
      </div>
    );
  }
}

// React.render(<Example />, document.getElementById('app'));

export default Example;