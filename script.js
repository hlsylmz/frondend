
let button = document.querySelector("#darkModeBtn");
console.log(button);

button.addEventListener("click", function () {
  button.classList.toggle("darkModeBtn");

  console.log("Du klickade på knappen! Bra jobbat.");

  let allText = document.querySelectorAll("*:not(button)");

  allText.forEach((element) => {
    element.style.color = "white";
  });
  let allSections = document.querySelectorAll("body");

  allSections.forEach((section) => {
    section.style.background = "black";
  });
});



/*function myFunction() {
  let element = document.body;
  element.classList.toggle("dark-mode");

}*/
