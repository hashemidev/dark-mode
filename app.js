let content = document.getElementsByTagName("body")[0];
let dark_mode = document.getElementById("switch");

dark_mode.addEventListener("click", function () {
  dark_mode.classList.toggle("active");
  content.classList.toggle("night");
});
