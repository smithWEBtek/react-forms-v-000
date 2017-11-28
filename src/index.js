import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInput from './components/ControlledInput'
import NameForm from './components/NameForm'
import EssayForm from './components/EssayForm'
import FlavorForm from './components/FlavorForm'
import Reservation from './components/Reservation'

ReactDOM.render(
  <div>
    <ControlledInput />
    <NameForm />
    <EssayForm />
    <Reservation />
    <FlavorForm />
  </div>,
  document.getElementById('root1')
);
