var startButton = document.querySelector(".start-btn");
var question = document.querySelector(".question");
var answers = [
    document.getElementById("1"),
    document.getElementById("2"),
    document.getElementById("3"),
    document.getElementById("4")
  ];

var timeLeft = 75;
var score = 0;
var questionIndex = 0;
function quizTimer(){
    var timer1 = setInterval(function() {
    timeLeft--;
    if (timeLeft === 0){
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

function questionMaker(questionText, answersArr) {
    question.textContent = questionText;
    for (var x = 0; x < answers.length; x++) {
        answers[x].removeEventListener("click", answerClickHandler);
    }

    function answerClickHandler(event) {
        var selectedAnswer = event.target.textContent.substr(3);

        if (selectedAnswer === answersArr[questionIndex][0]) {
            score++;
        }

        questionIndex++;

        if (questionIndex < questionArr.length) {
            questionMaker(questionArr[questionIndex], answerArr[questionIndex]);
        } else {
            var quizFinishedSection = document.getElementById("quiz-finished");
            var finalScoreSpan = document.getElementById("final-score");
            quizFinishedSection.style.display = "block";
            finalScoreSpan.textContent = score;

            for (var x = 0; x < answers.length; x++) {
                answers[x].removeEventListener("click", answerClickHandler);
            }
        }
    }
    for (var x = 0; x < answers.length; x++) {
        answers[x].addEventListener("click", answerClickHandler);
        answers[x].textContent = x + 1 + "." + answersArr[x];
    }
}

questionMaker(questionArr[0], answerArr[0]);


var submitScoreButton = document.getElementById("submit-score");
var initialsInput = document.getElementById("initials-input");
submitScoreButton.addEventListener("click", function() {
    var initials = initialsInput.value.trim();

    if (initials !== "") {
        var highScores = JSON.parse(localStorage.getItem("highScores")) || [];
        highScores.push({ initials: initials, score: score });
        localStorage.setItem("highScores", JSON.stringify(highScores));
    }
});