var questions = [
    {
        text: "how do you copy an Object in javascript?",
        answers: [
            "Copy & Paste ",
            "Object.assign()",
            "Using spread parameter", 
        ],
        correctIndex: 1
    },
    {
      text: "How do you bla bla bla",
      answers: ["a", "b", "c"],
      correctIndex: 0,
    },
    {
        text: "What is asldkjsdkj?",
        answers: ["a", "b", "c"],
        correctIndex: 0,
      },
      {
        text: "When is this project due?",
        answers: ["a", "b", "c"],
        correctIndex: 0,
      },
      {
        text: "How do you bla bla bla",
        answers: ["a", "b", "c"],
        correctIndex: 0,
      },

];

//selectors
var startBtn = document.querySelector("#btnStartQuiz");
var quizSection = document.querySelector("#quiz");
var startSection = document.querySelector("#start")
var timeLeft = document.querySelector("#timeleft");
var questionText = document.querySelector("#question-text");
var questionAnswers = document.querySelector("#question-answers");

// Initial Values 
var totalTimeLeft = 75;
var pointsOff = 10;
var questionIndex = 0;

 function displayTimeLeft() {
    totalTimeLeft--;
    timeLeft.textContent = totalTimeLeft;
 }

 function displayNextQuestion() {
    questionAnswers.innerHTML = "";

   var question = questions[questionIndex];
   questionText.textContent = question.text;

   for (var i = 0 ; i < question.answers.length; i++) {
       var answers = question.answers[i];
       var liEl = document.createElement('li');
       liEl.textContent = answerChoice;
       liEl.setAttribute("data-index", i);
       questionAnswers.appendChild(liEl);
       questionAnswers.setAttribute("data-correct-index", question.
       correctIndex);
   }
 }

 function answerClicKHandler(event) {
    if (event.target.matches("li")) {
    questionIndex++;
    displayNextQuestion();
    }  
 }
 
function startQuiz() {
    startSection.style.display ="none";
    quizSection.style.display = "block";

  var quizInterval = setInterval(function() {
    displayTimeLeft();
  }, 1000);
}

function startQuiz() {
    setTimeout(function () {
        displayTimeLeft();
        displayNextQuestion();
    }, 1000);
}

function init() {
    startBtn.addEventListener("click",startQuiz);
    questionAnswers.addEventListener("click" , answerClicKHandler)
}

init();
