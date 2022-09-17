# Emo7ion - TensorFlow Keras Facial Experession Recognition Website 

## Purpose
Analyzing the emotion of crowds with thousands of people is close to impossible because of the shear amonut of people. The purpose of this project is to train a model that will be able to tackle this problem. This project could be extremely useful during a zoom call to track engagment, concerts and events to track fan enojeyments and much more. 

![Problem and Solution](gitImages/problemSolution.png?raw=true "Problem and Solution")

## Why
Our team wanted to grow in the fields of:
* Computer vision, Convultional Neural Networks and deep learning.
* Learn how to use AWS for data science cloud computing
* Learning how to work with AWS and Flask

## Data
We got our data from the "Face expression recognition dataset" on Kaggle. This dataset contains 35,900 different images classified into 7 different emotions [Happy, Sad, Angry, Neutral, Suprise, Disgust, Fear].

![Problem and Solution](gitImages/DatasetFaces.png?raw=true "Problem and Solution")

## Model
Our team decided to use a TensorFlow Kearn Convolutional Neural Network. 

Our model was formated as follows:
* Four Convulutional 2D Layer of size [64, 128, 512, 512]
* Two Dense Layers of size [256, 512]
* We used a "categorical_crossentropy" loss when training the model

![ModelImage](gitImages/NeuralNetworkImages.png?raw=true "Model Images")
**Our Model was trained then exported from AWS Sagemaker**

## Hyper Parameter Tuning
We chose to use the Keras-Tuner python Library to tune our hyperparameters.
The main parameters that we chose to tune are:
* Dropouts percents
* Number of Filters of the third and fourth Conv2d Layer 
* Number of Units on all the Dense Layers

**Complications: ** The complexity of our model and the size of our data required large amount of CPU resources (15+ hrs) in order to use a hyper parameter tuner. In order to accomplish this we needed to use a virtual computer on cloud (AWS EC2). The AWS EC2 storage we were alloted wasn't large enough to hold our image dataset.

## Accuracy
The accuracy of our model came out total accuracy ***65%*** which is impressive comparend to humans who can correctly assess emotion 72% of the time.

![Heatmap](gitImages/ConfusionMatrix.png?raw=true "HeatMap")

Our model was best at predicting Happy emotions with an accuracy of 86% and worst at predicting fear with a 30% accuracy.

## Future
We want to make our data be able to work on anyone, regardless of how they look. In order to do this we will have to gather more data on other races, genders, ages an more. 

We also want to fully integerate our model onto a react website connected to a AWS Lambda endpoint.



