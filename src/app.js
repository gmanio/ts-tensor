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

    this.loadImage();
    // const model = getModel();

    // model.then((test) => {
    //   const daisy = document.getElementById('daisy');
    //   debugger;
    //   test.execute({ input: tf.fromPixels(daisy) });
    //   // tf.excute({ input: tf.fromPixels(daisy) });
    // })
    // debugger;
    // model.excute({ input: tf.fromPixels(daisy) })
  }

  loadImage() {
    const image = new Image();
    image.onload = () => {
      getModel().then(model => {
        const daisy = document.getElementById('daisy');
        // const intImageTensor = tf.fromPixels(daisy);
        // const floatImageTensor = tf.cast(intImageTensor, 'float32');
        // debugger;
        // const result = model.execute({ 'final_result': intImageTensor });
        const final = model.predict(
          [
            tf.fromPixels(daisy)
              .toFloat()
              .div(tf.scalar(255))
              .expandDims()])
          .squeeze();
        const values = final.squeeze();
        const resultArray = Array.from(final);
        debugger;
        console.log(result);
      })

      // loadFrozenModel(MODEL_URL, WEIGHTS_URL).then(model => {
      //     const intImageTensor = tfc.fromPixels(image);
      //     const floatImageTensor = tfc.cast(intImageTensor, 'float32');

      //     const result = model.execute({'hub_input/images': floatImageTensor});
      //     console.log('Result', result);
      // });
    }
    image.src = './test_img/sample_daisy.jpg';
  }

  render() {
    return React.createElement('h1', null, 'Greetings, ' + this.props.name + '!');
  }
}

ReactDOM.render(
  React.createElement(Greetings, { name: 'Park' }),
  document.getElementById('app')
);