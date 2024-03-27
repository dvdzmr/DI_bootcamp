const form = document.querySelector("form");
let inputRad = document.getElementById("radius");
let outputVol = document.getElementById("volume");
let rad = 0;
let vol = 0;

form.addEventListener("submit", getVolume);

inputRad.addEventListener("change", getRadius);
function getRadius(event) {
  rad = event.target.value;
}
function getVolume(e) {
  e.preventDefault();
  vol = (4/3) * Math.pow(inputRad.value, 3) * Math.PI;
  outputVol.value = vol.toFixed(2);
}