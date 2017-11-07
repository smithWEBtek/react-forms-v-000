import React, { Component } from 'react';

class ControlledInput extends Component {
  constructor(){
    super();

    this.state = {
      value: '',
      happy: true
    };
  }

  handleChange = event => {
    this.setState({
      name: event.target.value,
    });
  }

  handleCheckBoxChange = e => {
    this.setState({
      happy: e.target.checked
    });
  }

  render() {
    return (
      <div>
      <input type="text" onChange={ this.handleChange } value={this.state.name} />
      <br />
      <br />
      <label>
        Happy?
        <input type="checkbox" onChange={ this.handleCheckBoxChange } checked={this.state.happy} />
      </label>
      <h3>Hello {this.state.name}{(this.state.happy) ? "!" : ":("}</h3>
      </div>
    );
  }
}

export default ControlledInput; 