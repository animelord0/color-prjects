const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //hex colors always have to start with #
  let hexcolor = "#";
  for (let i = 0; i < 6; i++) {
    hexcolor += hex[random()];
  }
  color.innerText = hexcolor;
  document.body.style.backgroundColor = hexcolor;
});
function random() {
  return Math.floor(Math.random() * hex.length);
}
