import React, { Component } from 'react';

class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'coconut'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleChangeText(event) {
    this.setState({value: event.target.value});
  }

  handleSubmitText(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }
  handleSubmit(event) {
    alert('Your favorite flavor is: ' + this.state.value);
    event.preventDefault();
  } 

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <textarea cols="20" rows="4" value={this.state.value} onChange={this.handleChangeText} value="This is some text in a text area."></textarea>
        <br />
        <br />
        <label>
          Pick your flavor:
        <br />
        <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
            <option value="berry">Berry</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default FlavorForm;