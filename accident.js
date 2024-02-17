const cry = document.querySelector(".container");

function playSong() {
  const music = new Audio("female-scream.mp3");
  music.play();
}
cry.addEventListener("mouseover", () => {
  playSong();
});
