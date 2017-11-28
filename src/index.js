import React from 'react';
import ReactDOM from 'react-dom';
import ControlledInput from './components/ControlledInput'
import NameForm from './components/NameForm'
import EssayForm from './components/EssayForm'
import FlavorForm from './components/FlavorForm'
import Reservation from './components/Reservation'

ReactDOM.render(
  <ControlledInput />,
  document.getElementById('root1')
);

ReactDOM.render(
  <NameForm />,
  document.getElementById('root2')
);

ReactDOM.render(
  <EssayForm />,
  document.getElementById('root3')
);

ReactDOM.render(
  <FlavorForm />,
  document.getElementById('root4')
);

ReactDOM.render(
  <Reservation />,
  document.getElementById('root5')
);
