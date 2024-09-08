document.addEventListener("DOMContentLoaded", function () {
  const audio = document.getElementById("audio");
  const firstClick = document.getElementById("firstClick");
  const controls = document.getElementById("controls");
  const playButton = document.getElementById("playButton");
  const pauseButton = document.getElementById("pauseButton");
  const volumeSlider = document.getElementById("volumeSlider");

  // Ocultar los botones al principio
  controls.style.display = "none";
  playButton.style.display = "none";

  // Mostrar los botones y reproducir el audio al hacer clic en la ventana
  firstClick.addEventListener("click", function () {
    audio.play().catch(function (error) {
      console.log("Error al reproducir el audio:", error);
    });

    firstClick.style.display = "none";
    controls.style.display = "flex";
    audio.volume = volumeSlider.value;
  });

  playButton.addEventListener("click", function () {
    audio.play().catch(function (error) {
      console.log("Error al reproducir el audio:", error);
    });
    pauseButton.style.display = "flex";
    playButton.style.display = "none";
  });

  pauseButton.addEventListener("click", function () {
    audio.pause();
    playButton.style.display = "flex";
    pauseButton.style.display = "none";
  });

  volumeSlider.addEventListener("input", function () {
    audio.volume = volumeSlider.value;
  });
});
