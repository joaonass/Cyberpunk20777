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

let medifoto = document.getElementById("medifoto");

let glitch = document.createElement("div");
glitch.className = "glitch-input-wrapper";
glitch.innerHTML = `
  <div class="input-container">
    <input type="text" class="holo-input" placeholder="" required />
    <label class="input-label" data-text="ACCESS_CODE">ACCESS_CODE</label>

    <div class="input-border"></div>
    <div class="input-scanline"></div>
    <div class="input-glow"></div>

    <div class="input-data-stream">
      ${Array.from({ length: 10 })
        .map((_, i) => `<div class="stream-bar" style="--i:${i}"></div>`)
        .join("")}
    </div>

    <div class="input-corners">
      <div class="corner corner-tl"></div>
      <div class="corner corner-tr"></div>
      <div class="corner corner-bl"></div>
      <div class="corner corner-br"></div>
    </div>
  </div>
`;

medifoto.appendChild(glitch);