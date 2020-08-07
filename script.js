//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;

var neutralScore = 0;
var neonScore = 0;
var pastelScore = 0; 
var colorfulScore = 0;





//#TODO: Use the DOM to create variables for the first quiz question.
var result = document.getElementById("result");

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


//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", neutral);
q1a2.addEventListener("click", neon);
q1a3.addEventListener("click", pastel);
q1a4.addEventListener("click", all);

q2a1.addEventListener("click", neutral);
q2a2.addEventListener("click", neon);
q2a3.addEventListener("click", pastel);
q2a4.addEventListener("click", all);

q3a1.addEventListener("click", neutral);
q3a2.addEventListener("click", neon);
q3a3.addEventListener("click", pastel);
q3a4.addEventListener("click", all);



//#TODO: Define quiz functions here
function neutral(){
  questionCount += 1; 
  neutralScore += 1;
  //alert("One point for neutral!");
  if(questionCount >= 3){
    updateResult();
  }
}
function neon(){
  questionCount += 1;
  neonScore += 1;
  //alert("One point for neon!");
  if(questionCount >= 3){
    updateResult();
  }
}
function pastel(){
  questionCount += 1;
  pastelScore += 1;
  //alert("One point for pastel!");
  if(questionCount >= 3){
    updateResult();
  }
}
function all(){
  questionCount += 1;
  colorfulScore += 1;
  //alert("One point for all colors!");
 if(questionCount >= 3){
    updateResult();
  }
}
function updateResult(){
if(neutralScore >= 2){
  result.innerHTML = "You like Neutral Colors!";
}
else if (neonScore >= 2){
  result.innerHTML = "You like Neon Colors!";
}
else if (pastelScore >= 2){
  result.innerHTML = "You like Pastel Colors!";
}
else if (colorfulScore >= 2){
  result.innerHTML = "You like All colors!";
}
else{
  result.innerHTML = "Try again...";
}
}