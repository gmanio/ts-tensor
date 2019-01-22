// import React from 'react';
// import { render } from 'react-dom';
// import * as tf from '@tensorflow/tfjs';
// import { loadFrozenModel } from '@tensorflow/tfjs-converter';

const MODEL_URL = 'tensor/web_model/tensorflowjs_model.pb';
const WEIGHTS_URL = 'tensor/web_model/weights_manifest.json';

const getModel = async () => {
  const model = await tf.loadFrozenModel(MODEL_URL, WEIGHTS_URL);



  return model;
};


class Greetings extends React.Component {
  constructor() {
    super();
    const model = getModel();
    
    model.then((test)=>{
      const daisy = document.getElementById('daisy');
      test.execute({ input: tf.fromPixels(daisy) });
      // tf.excute({ input: tf.fromPixels(daisy) });
    })
    // debugger;
    // model.excute({ input: tf.fromPixels(daisy) })
  }

  render() {
    return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
  }
}

ReactDOM.render(
  React.createElement(Greetings, { name: 'Park' }),
  document.getElementById('app')
);