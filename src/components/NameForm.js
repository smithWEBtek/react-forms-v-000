import React, { Component } from 'react';

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    
    // this.handleChange = this.handleChange.bind(this);
    // instead, in the form use:  
      //  <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} />
    // this.handleSubmit = this.handleSubmit.bind(this);
    // instead, in the form use: 
    //      <form onSubmit={(e)=>this.handleSubmit(e)}>
  }
  
  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }
  
  handleSubmit(event) {
    if (this.state.value === 'asdf' ? alert('please do NOT type asdf!!') :  alert('A name was submitted: ' + this.state.value))
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={(e)=>this.handleSubmit(e)}>
        <label>
          NameForm:
          <input type="text" value={this.state.value} onChange={(e)=>this.handleChange(e)} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm; 