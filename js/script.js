document.documentElement.style.setProperty("--color", localStorage.getItem("pageColor"));

const colors = document.querySelectorAll(".colors");
const icontheme = document.querySelector(".icon-theme");
const plaette = document.querySelector(".plaette-colors");

icontheme.addEventListener("click", function () {
  plaette.classList.toggle("show-colors");
});

colors.forEach(function (color) {
  color.addEventListener("click", function () {
    let hex = color.dataset.color;
    document.documentElement.style.setProperty("--color", hex);

    localStorage.setItem("pageColor", color.dataset.color);
  });
});
