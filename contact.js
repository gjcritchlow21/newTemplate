//input areas
let sideA = document.getElementById("sideA");
let sideB = document.getElementById("sideB");

//span to display answer
let result = document.getElementById("hypotenuse");


//console.log({sideA, sideB});

//submit button that takes in all the info
let submit = document.getElementById("submitButton");

//add event listener to the submit button
submit.addEventListener("click", (e) => {//listening for the click, then running a fat arrow function
  e.preventDefault();//prevent default behavior
  sideA = parseInt(sideA.value)//turning string in number
  sideB = parseInt(sideB.value);//see above
  let hyp = Math.hypot(sideA, sideB)//running hypot method 

 result.textContent = hyp//returning our calculated value
});