const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelectorAll(".heitem");
const btn = document.querySelector("#btn");
const colorBox = document.querySelectorAll(".color-box");

btn.addEventListener("click", function () {
  colorBox.forEach((box) => {
    let hexcolor = "#";
    for (i = 0; i < 6; i++) {
      hexcolor += hex[random()];
    }
    box.style.backgroundColor = hexcolor;

    color.forEach((text) => {
      let hexcolor = "#";
      for (let i = 0; i < 6; i++) {
        hexcolor += hex[random()];
      }
      text.innerText = hexcolor;
    });
  });
});

function random() {
  return Math.floor(Math.random() * hex.length);
}

// btn.addEventListener("click", function () {
//   let hexcolor = "#";
//   for (i = 0; i < 6; i++) {
//     hexcolor += hex[random()];
//   }
//   color.forEach((text) => {
//     text.innerText = hexcolor;
//   });
//   colorBox.forEach((boxes) => {
//     boxes.style.backgroundColor = hexcolor;
//   });
// });
// function random() {
//   return Math.floor(Math.random() * hex.length);
// }

//const btn = document.querySelector("#btn");
// const generatepalete = () => {
//   for (let i = 0; i < 6; i++) {}
//   let randomnumber = Math.floor(Math.random() * 0xffff);
//   randomnumber = `#${randomnumber.toString(16).padStart(6, "0")}`;

//   console.log(randomnumber);
// };

// btn.addEventListener("click", generatepalete);
