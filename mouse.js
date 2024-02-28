const testBox = document.getElementById("testBox");
const resizeBox = document.getElementById("resize");
const scrollBox = document.getElementById("scroll");

const eventVars = {
  mousedown: document.getElementById("mousedown"),
  mouseup: document.getElementById("mouseup"),
  mouseover: document.getElementById("mouseover"),
  click: document.getElementById("click"),
  dblclick: document.getElementById("dblclick"),
  contextmenu: document.getElementById("contextmenu"),
  mousemove: document.getElementById("mousemove"),
  mouseout: document.getElementById("mouseout"),
  mouseenter: document.getElementById("mouseenter"),
  mouseleave: document.getElementById("mouseleave"),
};

Object.keys(eventVars).forEach((eventType) => {
  testBox.addEventListener(eventType, (event) =>
    handleMouseEvent(event, eventType)
  );
});

function handleMouseEvent(event, eventType) {
  testBox.innerHTML = eventType;
  event.preventDefault();
  const targetVar = eventVars[eventType];
  if (targetVar) {
    targetVar.style.backgroundColor = "aqua";
    setTimeout(() => {
      targetVar.style.backgroundColor = "white";
    }, 100);
  }
}

function adjustStyles() {
  const windowWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const windowHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const clientX = document.getElementById("clientX");
  const clientY = document.getElementById("clientY");
  clientX.style.width = windowWidth + "px";
  clientY.style.height = windowHeight + "px";
  clientX.innerHTML = "<br />clientX(" + windowWidth + "px)";
  clientY.innerHTML = "&nbsp;&nbsp;clientY(" + windowHeight + "px)";
}
window.addEventListener("resize", function () {
  adjustStyles();
  // Your scroll event handling code here
  testBox.innerHTML = "resize";
  resizeBox.style.backgroundColor = "aqua";
  setTimeout(() => {
    resizeBox.style.backgroundColor = "white";
  }, 100);
});

window.addEventListener("scroll", function () {
  // Your scroll event handling code here
  testBox.innerHTML = "scroll";
  scrollBox.style.backgroundColor = "aqua";
  setTimeout(() => {
    scrollBox.style.backgroundColor = "white";
  }, 100);
});

window.onload = adjustStyles();

const offsetPos = document.getElementById("offsetPos");
const clientPos = document.getElementById("clientPos");
const pagePos = document.getElementById("pagePos");
function checkPos(e) {
  clientPos.innerHTML = `client: ${e.clientX}, ${e.clientY}`;
  pagePos.innerHTML = `page: ${e.pageX}, ${e.pageY}`;
}
function checkPosBox(e) {
  offsetPos.innerHTML = `offset: ${e.offsetX}, ${e.offsetY}`;
  clientPos.innerHTML = `client: ${e.clientX}, ${e.clientY}`;
  pagePos.innerHTML = `page: ${e.pageX}, ${e.pageY}`;
}
testBox.addEventListener("click", checkPosBox);
document.addEventListener("click", checkPos);
