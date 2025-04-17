function seekVideo(seconds) {
  const video = document.getElementById("custom-video-player");
  if (video) {
    video.currentTime = seconds;
    video.play(); // Optional: auto play after seeking
  }
}
