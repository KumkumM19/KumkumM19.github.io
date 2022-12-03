var mysong = document.getElementById("song");
var play_icon = document.getElementById("i3");
var seekbar = document.getElementsByClassName("song-slider");
var currentTime = document.getElementsByClassName("current-time");
var musicDuration = document.getElementsByClassName("song-duration");
let timer;

i3.onclick = function () {
  if (mysong.paused) {
    mysong.play();
    play_icon.src = "../Images/Pause Button.png";
  } else {
    mysong.pause();
    play_icon.src = "../Images/Play Button Circled.png";
  }
};
