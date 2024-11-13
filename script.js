const lightmode = document.getElementById("lightmode-icon");
const darkmode = document.getElementById("darkmode-icon");

darkmode.addEventListener("click", () => {
  lightmode.style.display = "block";
  darkmode.style.display = "none";

  document.body.classList.remove("dark-theme");
});

lightmode.addEventListener("click", () => {
  lightmode.style.display = "none";
  darkmode.style.display = "block";

  document.body.classList.add("dark-theme");
});

// background blurs when the theme icon is hovered
function hoverIcon() {
  const mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.style.filter = "blur(10px)";
  }
}

function hoverIconNegative() {
  const mainElement = document.querySelector("main");
  if (mainElement) {
    mainElement.style.filter = "blur(0px)";
  }
}

// to check and uncheck a list
const checkBox = document.querySelectorAll(".checked");

window.addEventListener("DOMContentLoaded", () => {
  const checkBoxes = document.querySelectorAll(".checked");
  checkBoxes.forEach((checkBox) => {
    checkBox.classList.remove("checked");
  });
});

checkBox.forEach((checkBox) => {
  checkBox.addEventListener("click", () => {
    checkBox.classList.toggle("checked");
  });
});

// to add an input
const inputBox = document.getElementById("text-input");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("hello");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }

  inputBox.value = "";
}

inputBox.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addTask(); // Add the task when Enter is pressed
  }
});

listContainer.addEventListener(
  "click",
  function (event) {
    if (event.target.tagName === "LI") {
      event.target.classList.toggle("checked");
    } else if (event.target.tagName === "SPAN") {
      event.target.parentElement.remove();
    }
  },
  false
);
