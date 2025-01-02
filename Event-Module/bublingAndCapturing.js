const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const orange = document.querySelector(".orange");

green.addEventListener("click", () => {
  console.log("green click");
});
blue.addEventListener("click", () => {
  console.log("blue click");
});
orange.addEventListener("click", (e) => {
  console.log("orange click");
});
