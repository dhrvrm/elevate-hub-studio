const colors = ["#ffcf00", "#007087", "#EC994B", "#C70039"];
const span = document.querySelector(".typing");
var cursor = 0;
let changeColor = () => {
  if (cursor >= colors.length) {
    cursor = 0;
  }
  span.style.color = colors[cursor++];
};
var options = {
  strings: [
    "that grow",
    "that elevate",
    "that enagage",
    "that empower",
    "that inspire",
    "that impact",
    "that innovate",
    "that impact",
  ],
  typeSpeed: 100,
  backSpeed: 50,
  backDelay: 600,
  smartBackspace: false,
  loop: true,
  preStringTyped: (arrayPos, self) => changeColor(),
  // onLastStringBackspaced: (self) => changeColor(),
};

try {
  var typed = new Typed(".typing-span", options);
  AOS.init();
} catch (e) {
  console.log("initialization error");
}


//video

function loadAndPlayVideo() {
  var video = document.getElementById('video');
  var thumbnail = document.getElementById('video-thumbnail');

  // Set the video source
  video.src = '../assets/video/elevate-video.mp4'; // Update this with your video file path

  // Show the video and hide the thumbnail
  video.style.display = 'block';
  thumbnail.style.display = 'none';

  // Play the video
  video.play();
}
