const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");


function printEvent(e) {
  console.log(e.type);
}
const eventVars = {
  focusin: document.getElementById("focusin"),
  focusout: document.getElementById("focusout"),
  focus: document.getElementById("focus"),
  blur: document.getElementById("blur"),
  change: document.getElementById("change"),
  input: document.getElementById("input"),
  select: document.getElementById("select"),

};
Object.keys(eventVars).forEach((eventType) => {
  firstInput.addEventListener(eventType, (event) =>
    handleInputEvent(event, eventType)
  );
  secondInput.addEventListener(eventType, (event) =>
    handleInputEvent(event, eventType)
  );
});

function handleInputEvent(event, eventType) {
  event.preventDefault();
  const targetVar = eventVars[eventType];
  if (targetVar) {
    targetVar.style.backgroundColor = "aqua";
    setTimeout(() => {
      targetVar.style.backgroundColor = "white";
    }, 200);
  }
}
