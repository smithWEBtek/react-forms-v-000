import React, { Component } from 'react';

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'radio'||'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
    console.log(target.type)
  }

  handleNumberOfGuestsInputChange(event) {
    return event.target.value
  }

  render() {
    return (
      <form>
        <fieldset>
          <label>Is going:
            <input
              name="isGoing"
              type="checkbox"
              checked={this.state.isGoing}
              onChange={(event) => this.handleInputChange(event)} />
            </label>        
            <br /> 
            <label>Is Vegan:
              <input
                name="isVegan"
                type="radio"
                selected={this.state.isVegan}
              
                 />
            </label>
            <br /> 
            <label>Number of guests:
              <input
                name="numberOfGuests"
                type="number"
                value={this.state.numberOfGuests}
                onChange={(event) => this.handleNumberOfGuestsInputChange(event)} />
            </label>
        </fieldset>
      </form>
    );
  }
}

export default Reservation;