let video = document.getElementById("myVideo");
let crossBtn = document.getElementById('cancelButton')
let overlay = document.getElementById('overlay')
let contentBox = document.getElementById("content-box")

// display overlay function 👇
function overlayOff() {
  setTimeout(function () {
    overlay.style.opacity = 0.85;
  }, 20);
  overlay.style.display = 'inline-block';
  crossBtn.style.display = 'none';
  video.muted = true;
}
// hide overlay function 👇
function overlayOn() {
  overlay.style.opacity = 0;
  setTimeout(function () {
    overlay.style.display = 'none';
    crossBtn.style.display = 'inline-block';
    video.muted = false;
  }, 1000);
}