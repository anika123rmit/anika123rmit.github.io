// As the crafting video provided by canvas already had the play, pause, sound and full screen buttons,I had to introduce a new feature which was'nt already present.
// The feature of buttons is a relevant item in the context of my website since the media player is a crafting video tutorial.
// Through the use of  buttons, users can jump to specific points in the video to see how the Windmill is being made, and rewatch specific parts if they get stuck and need repetition.

function seekVideo(seconds) {
  const video = document.getElementById("custom-video-player");
  if (video) {
    video.currentTime = seconds;  
    /* the currentTime function allows the user to play specific parts of the crafting tutorial.
    video.play();
  }
}
/* This code is linked to the <button onclick fucntion in index.html.
