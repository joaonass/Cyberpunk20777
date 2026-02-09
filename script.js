let video = document.getElementById("video");

if (sessionStorage.getItem("introPlayed")) {
  video.remove();
} else {
  video.play();
  sessionStorage.setItem("introPlayed", "true");

  video.addEventListener("ended", function () {
    video.remove();
  });
}

