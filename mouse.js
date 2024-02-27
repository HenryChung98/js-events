const testBox = document.getElementById("testBox");
const resizeBox = document.getElementById("resize");

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

window.addEventListener("resize", function () {
  // Your scroll event handling code here
  testBox.innerHTML = "resize";
  resizeBox.style.backgroundColor = "aqua";
  setTimeout(() => {
    resizeBox.style.backgroundColor = "white";
  }, 100);
});
