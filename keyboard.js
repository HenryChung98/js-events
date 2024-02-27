const characters1 = [
  "ESC",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "DEL",
];
const characters2 = [
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "BACK",
];
const characters3 = [
  "TAB",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "|",
];
const characters4 = [
  "CAPSLOCK",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  '"',
  "ENTER",
];
const characters5 = [
  "SHIFT",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  ",",
  ".",
  "/",
  "SHIFT",
];
const characters6 = [
  "CTRL",
  "fn",
  "ALT",
  "META",
  "SPACEBAR",
  "META",
  "ALT",
  "←",
  "↑",
  "↓",
  "→",
];

const specialButtons = ["BACK", "TAB", "CAPSLOCK", "ENTER"];

const createButton = (container, char) => {
  const button = document.createElement("button");
  button.classList.add("keys" + char);
  button.textContent = char;
  if (specialButtons.includes(button.textContent)) {
    button.style.width = "101px";
  } else if (button.textContent === "SPACEBAR") {
    button.style.width = "255px";
  } else if (button.textContent === "SHIFT") {
    button.style.width = "125px";
  } else {
    button.style.width = "50px";
  }

  // set margin
  if (
    button.textContent === "ESC" ||
    button.textContent === "F4" ||
    button.textContent === "F8"
  ) {
    button.style.marginRight = "20px";
  }

  button.addEventListener("click", () => onKeyPress(char));
  container.appendChild(button);
};

const keyboardContainer1 = document.querySelector("#keyboardFirst");
characters1.forEach((char) => createButton(keyboardContainer1, char));

const keyboardContainer2 = document.querySelector("#keyboardSecond");
characters2.forEach((char) => createButton(keyboardContainer2, char));

const keyboardContainer3 = document.querySelector("#keyboardThird");
characters3.forEach((char) => createButton(keyboardContainer3, char));

const keyboardContainer4 = document.querySelector("#keyboardFourth");
characters4.forEach((char) => createButton(keyboardContainer4, char));

const keyboardContainer5 = document.querySelector("#keyboardFifth");
characters5.forEach((char) => createButton(keyboardContainer5, char));

const keyboardContainer6 = document.querySelector("#keyboardSixth");
characters6.forEach((char) => createButton(keyboardContainer6, char));

function onKeyPress(char) {
  const button = document.querySelector(`.keys${char}`);
  switch (char) {
    case "Shift":
      // Handle Shift key press
      console.log("Shift key pressed");
      break;
    case "Enter":
      // Handle Enter key press
      console.log("Enter key pressed");
      break;
    default:
      // Handle other key presses
      console.log("Key pressed:", char);
      if (button) {
        button.style.backgroundColor = "gray";
        setTimeout(() => {
          button.style.backgroundColor = "white";
        }, 100);
      }
      break;
  }
}

// key
const keyName = document.querySelector(".keyName");
const keyCode = document.querySelector(".code");
const checkKeyPress = document.querySelector(".press");
const checkKeyDown = document.querySelector(".down");
const checkKeyUp = document.querySelector(".up");
const originalColor = checkKeyPress.style.backgroundColor;


// key pressed
document.addEventListener("keypress", function (event) {
  keyName.innerHTML = "Name : " + event.key;
  keyCode.innerHTML = "Code : " + event.code;
  console.log("Key pressed:", event);
  checkKeyPress.style.backgroundColor = "green";
  setTimeout(() => {
    checkKeyPress.style.backgroundColor = originalColor;
  }, 100);
});

// key down
document.addEventListener("keydown", function () {
  checkKeyDown.style.backgroundColor = "red";
  setTimeout(() => {
    checkKeyDown.style.backgroundColor = originalColor;
  }, 100);
});

// key up
document.addEventListener("keyup", function () {
  checkKeyUp.style.backgroundColor = "blue";
  setTimeout(() => {
    checkKeyUp.style.backgroundColor = originalColor;
  }, 100);
});


