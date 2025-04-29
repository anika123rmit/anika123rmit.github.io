const myVideo = document.querySelector("my-video");
console.log(myVideo);


// play pause logic
// fethc the play pause button 

const playPauseButton = document.querySelector("play-pause-button");
console.log(playPauseButton);

playPauseButton.addEventListener("click",toggleplay);

function togglePlay() {
if (myVideo.paused  myVideo.ended) }
playPauseImg.src = link 
myVideo.play();
}else{
  playPauseImg.src= linkmyVideo.pause();
}
}

// FOR ASSIGMNT 
const fastForwardButton=document.querySelector ("#fast-forward-button")
  console.log(fastfastForwardButton);

  fastForwardButton.addEventListener("click",fastForward);

  function fastForward(){
if (myVideo.playbackrate === 1.0) {
  myVideo.playbackrate=2.0;
} else {
  myVideo.playbackRate=1.0
}
  }


  // PT 22222

  function goFullscreen(){
    myVideo.requestFullscreen();
  }

  // LIKE BUTTON
  const
  <div id="likes"></div> 
  // indext.html