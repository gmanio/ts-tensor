import * as tf from '@tensorflow/tfjs';
import * as tfNode from '@tensorflow/tfjs-node';

import util from 'util';
import { spawn } from 'child_process';
import { ModelStoreManagerRegistry } from '@tensorflow/tfjs-core/dist/io/model_management';

// console.log(tfNode.io.nodeHTTPRequest);


// const model = await tf.loadModel('file:///tmp/my-model-1/model.json');
// const model = await tf.loadModel('/tf_model/output_graph.pb');
// const model = await tf.loadTfHubModule('/tf_model/output_graph.pb')
const child = spawn('python', ['-V']);

child.stdout.on('data', function(data) {
    console.log('stdout: ' + data);
    //Here is where the output goes
});

child.stderr.on('data', function(data) {
    console.log('stderr: ' + data);
    //Here is where the error output goes
});

child.on('close', function(code) {
    console.log('closing code: ' + code);
    //Here you can get the exit code of the script
    //Here you can get the exit code of the script
});