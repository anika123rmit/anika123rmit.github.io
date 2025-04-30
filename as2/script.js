// As the crafting video provided by canvas already had the play, pause, sound and full screen buttons,I had to introduce a new feature which was'nt already present.
// The feature of buttons is a relevant item in the context of my website since the media player is a crafting video tutorial.
// Through the use of  buttons, users can jump to specific points in the video to see how the Windmill is being made, and rewatch specific parts if they get stuck and need repetition.

function seekVideo(seconds) {
  const video = document.getElementById("custom-video-player");
  if (video) {
    video.currentTime = seconds;
    //   the currentTime function allows the user to play specific parts of the video and rewatch parts if they get stuck in a step and need repetition.
    //  this code is linked to the <button onclick function in index.html.

    //   the addition of a progress bar to the media player allows for extra clarity,allowing the viewer to see how far within the video they have reached.
    const myVideo = document.querySelector("#my-video");
    const progressBar = document.querySelector("#progress-bar");

    myVideo.addEventListener("timeupdate", updateProgressbar);

    function updateProgressbar() {
      let progress = (myVideo.currentTime / myVideo.duration) * 100;
      progressBar.style.width = progress + "%";
    }
  }
}
