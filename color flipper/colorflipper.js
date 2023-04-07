const colors = [
  "green",
  "white",
  "black",
  "red",
  "orange",
  "lime",
  "pink",
  "blue",
];
const btn = document.querySelector("#btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
  //get random number btw 0 and 3
  const randomnumber = getrandomnumber();
  document.body.style.backgroundColor = colors[randomnumber];
  color.textContent = colors[randomnumber];
});

function getrandomnumber() {
  return Math.floor(Math.random() * colors.length);
}
