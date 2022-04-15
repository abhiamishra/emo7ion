import React, { useEffect, useRef } from 'react';
import axios from 'axios';
var currImg = ''


export async function Model() {
  //send url through the model and receive a num 0-6
  //store num as emotion 

  //send csnvas as parameter
  // let data = new FormData();
  // canvas.toBlob(function (blob) {
  //     data.append('data', blob);

  //     axios
  //         .post(`endpoint`, data, {
  //             headers: {
  //                 'Content-Type': 'multipart/form-data',
  //             },
  //         })
  //         .then(res => {
  //             console.log(res)
  //             return res.data
  //         });
  // });

  
  //for now, using random generator
  return Math.floor(Math.random() * 6)  

  // if(emotion === 0){
  //   return "Angry"
  // }
  // if(emotion === 1){
  //   return "Disgust"
  // }
  // if(emotion === 2){
  //   return "Fear"
  // }
  // if(emotion === 3){
  //   return "Happy"
  // }
  // if(emotion === 4){
  //   return "Sad"
  // }
  // if(emotion === 5){
  //   return "Surprise"
  // }
  // if(emotion === 6){
  //   return "Neutral"
  // }
}

// export function Image(picture) {

//   // URL generation
//   var imageURL = imagekit.url({
//     path : {picture},
//     transformation : [{
//       height: 100,
//       width: 200,
//       focus: "face"
//     }]
//   });

//   return imageURL
// }

// export function setPic(url){
//   picture = url
// }
// export function showPic(){
//   return picture
// }

export function download(picture){
  currImg = picture
  // window.location.href=picture;
  // <a download='screen.png' href={picture}></a>
}

export function sendToModel(){
  window.location.href=currImg;
}

