let btn = document.getElementById("btn");
let haxCode = document.getElementById("haxCode");

function randomColor() {
  let latter = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += latter[Math.floor(Math.random() * 16)];
  }
  return color;
}

btn.addEventListener("click", () => {
  document.body.style.backgroundColor = randomColor();
  haxCode.innerHTML = randomColor();
});
