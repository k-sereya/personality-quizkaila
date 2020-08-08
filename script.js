//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var waterScore = 0;
var airScore = 0;
var fireScore = 0;
var earthScore = 0;
var restartButton = 0;

//#TODO: Use the DOM to create variables for the first quiz question.

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");

var restart = document.getElementById("restart");



//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", water);
q1a2.addEventListener("click", fire);
q1a3.addEventListener("click", earth);
q1a4.addEventListener("click", air);

q2a1.addEventListener("click", earth);
q2a2.addEventListener("click", water);
q2a3.addEventListener("click", air);
q2a4.addEventListener("click", fire);

q3a1.addEventListener("click", water);
q3a2.addEventListener("click", air);
q3a3.addEventListener("click", earth);
q3a4.addEventListener("click", fire);

q4a1.addEventListener("click", earth);
q4a2.addEventListener("click", water);
q4a3.addEventListener("click", fire);
q4a4.addEventListener("click", air);

restart.addEventListener("click", reload);

//#TODO: Define quiz functions here
function water() {
  waterScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function air() {
  airScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function fire() {
  fireScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function earth() {
  earthScore += 1;
  questionCount += 1;

  if (questionCount >= 4) {
    updateResult();
  }
}

function reload() {
  restartButton += 1;
  
}

function updateResult() {
   if (waterScore >= 2){
     result.innerHTML = "Water!"

 }
 else if(airScore >=2){
   result.innerHTML = "Air!"

 }
 else if(fireScore >=2){
   result.innerHTML = "Fire!"

 }
 else if (earthScore>= 2){
   result.innerHTML = "Earth!"

 }
 else{
   result.innerHTML = "Some choices don't mix. Try the quiz again."

 }
}

function restartQuiz() {
  if(restartButton >=1){
    restart.innerHTML= "Your element is..."
  }
}

  



