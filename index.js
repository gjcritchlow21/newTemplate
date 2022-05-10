//Project Page

//SideBar Functionality

let presto = document.getElementById("presto");
let abra = document.getElementById("abra");
let blowup = document.getElementById("blowup");

function sayMagicWord(evt) {
  if (evt.target === presto) {
    alert("Change-O");
  } else if (evt.target === abra) {
    alert("Kadabra");
  } else {
    alert("My page is actually broken IDK happened");
  }
  console.log({ evt });
}

presto.addEventListener("click", sayMagicWord);
abra.addEventListener("click", sayMagicWord);
blowup.addEventListener("click", sayMagicWord);

//content1 functionality
let changeButton = document.getElementById("changeButton");
let colorChange = document.getElementById("colorChange");

changeButton.addEventListener("click", () => {
  if ((colorChange.style.backgroundColor = "rgba(0,0,0,.7)")) {
    colorChange.style.backgroundColor = "red";
  }
  console.log(colorChange.style);
});

//content 3 functionality

//target elements by ids
let userName = document.getElementById("userName"); //input form
let ticketButton = document.getElementById("ticketButton"); //button
let ticketOrder = document.getElementById("ticketOrder"); //order display

//globals
let count = 0; //sets the intial count to increment later

//functionality
function ticketTaker() {
  count++; //increment count

  let ticketStub = document.createElement("h3"); //create h3 element

  ticketStub.textContent = `${userName.value} : ${count}`; //assign a number to the name

  ticketOrder.appendChild(ticketStub); //print it in order container
}

//event listener
ticketButton.addEventListener("click", (evt) => {
  evt.preventDefault();// if the event does not get explicitly handled, its default action should not be taken as it normally would be.
  ticketTaker();//call(not reference) the function
});
