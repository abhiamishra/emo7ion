import React, { useEffect, useRef } from 'react';
import { IKContext, IKImage } from 'imagekitio-react';
var ImageKit = require("imagekit");
var picture = ''

// required parameter to fetch images
const urlEndpoint = 'https://ik.imagekit.io/aa207';

// optional parameters (needed for client-side upload)
const publicKey = 'public_1+sCaRpRi3m1mxYn35nRKZLc1PM=';

// SDK initialization

var imagekit = new ImageKit({
  publicKey : "public_1+sCaRpRi3m1mxYn35nRKZLc1PM=",
  urlEndpoint : "https://ik.imagekit.io/aa207",
});


export function Model(imageURL) {
  //send url through the model and receive a num 0-6
  //store num as emotion 
  const emotion = 0

  if(emotion === 0){
    return "Angry"
  }
  if(emotion === 1){
    return "Disgust"
  }
  if(emotion === 2){
    return "Fear"
  }
  if(emotion === 3){
    return "Happy"
  }
  if(emotion === 4){
    return "Sad"
  }
  if(emotion === 5){
    return "Surprise"
  }
  if(emotion === 6){
    return "Neutral"
  }
}

export function Image(picture) {

  // URL generation
  var imageURL = imagekit.url({
    path : {picture},
    transformation : [{
      height: 100,
      width: 200,
      focus: "face"
    }]
  });

  return imageURL
}

export function setPic(url){
  picture = url
}
export function showPic(){
  return picture
}

