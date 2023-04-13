var startButton = document.querySelector(".start-btn");
var question = document.querySelector("question");
var answers = document.querySelector = {
    0: document.querySelector("#1"),
    1: document.querySelector("#2"),
    2: document.querySelector("#3"),
    3: document.querySelector("#4")
}  
var timeLeft = 75;
function quizTimer(){
    var timer1 = setInterval(function() {
    timeLeft--;
    if (timeleft === 0){
        clearInterval(timer1);
    }
    }, 1000);
    
}
var questionArr = [
    "Which data type will show either True or False?",
    "Which one of these will put information in the console",
    "In Javascript the x===y statement implies that:",
    "Which element should the javascript be placed?",
    "Where in the HTML should the javascript be inserted?"
];

var answerArr = {
    0: ["Boolean", "String", "Number", "Undefined"],
    1: ["var Console()", "console.log()", ".log()", "consolelog{}"],
    2: ["Both x and y are equal in value, type and reference address as well", "Both x and y are equal in value only", "Both are equal in value and data type", "Both are not equal"],
    3: ["<script>", "<javascript>", "<js>", "<script.js>"],
    4: ["<head>", "<nav>", "<body>", "<div>"]
}



