// import React from 'react';
// import { render } from 'react-dom';
// import * as tf from '@tensorflow/tfjs';
// import { loadFrozenModel } from '@tensorflow/tfjs-converter';

class Greetings extends React.Component {
  render() {
    return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
  }
}

ReactDOM.render(
  React.createElement(Greetings, { name: 'Park' }),
  document.getElementById('app')
);