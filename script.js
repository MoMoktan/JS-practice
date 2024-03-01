
// ternary operator

// condition ? valueIfTrue : valueIfFalse)




const buttonElem = document.getElementById("button");
const body = document.body;

buttonElem.addEventListener('click', () => {
  const newText = buttonElem.innerText === "ON" ? "OFF" : "ON";
  buttonElem.innerText = newText;

  if (newText === "ON") {
    body. style. backgroundColor = "blue";
  } else {
    body. style. backgroundColor = "white";
  }
});

