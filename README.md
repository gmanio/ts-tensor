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

## 
python label_image.py --image ./test_img/sample_daisy.jpg --graph /tmp/output_graph.pb --labels /tmp/output_labels.txt

## Reference

https://github.com/golbin/TensorFlow-Tutorials/tree/master/11%20-%20Inception