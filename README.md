# ts-tensor
This example using Tensorflow Inception V3.

[Sample Images] : http://download.tensorflow.org/example_images/flower_photos.tgz

## Usage
Image retrain command

```
$> python retrain.py --image_dir flower_photos/

#result
INFO:tensorflow:Restoring parameters from /tmp/_retrain_checkpoint
INFO:tensorflow:Froze 378 variables.
INFO:tensorflow:Converted 378 variables to const ops.

```

## Show Output
```
$>python label_image.py --image ./test_img/sample_daisy.jpg --graph /tmp/output_graph.pb --labels /tmp/output_labels.txt

2018-12-23 08:46:37.844604: I tensorflow/core/platform/cpu_feature_guard.cc:141] Your CPU supports instructions that this TensorFlow binary was not compiled to use: AVX2 FMA
daisy 0.9978969
sunflowers 0.0011470014
dandelion 0.0008095624
roses 7.724412e-05
tulips 6.9350484e-05
```

## Changing Model ( python -> web )
```
tensorflowjs_converter \
   —input_format=tf_frozen_model \
   —output_node_names='final_result' \
   ./tf_files/outbody.pb \
   ./tf_files/web_model
 ```


## Reference
https://github.com/golbin/TensorFlow-Tutorials/tree/master/11%20-%20Inception
http://www.image-net.org/
