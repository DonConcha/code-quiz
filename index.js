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

//seclectors
var startBtn = document.querySelector("#btnStartQuiz");
var submitBtn = document.querySelector("#btnSubmitAnswer");
var timeLeft = document.querySelector("#timeleft");

// Initial Values 
var totalTimeLeft = 75;
var pointsOff = 10;
var questionIndex = 0;

 function displayTimeLeft() {
    totalTimeLeft--;
    timeLeft.textContent = totalTimeLeft;
 }

 function displayNextQuestion() {
   var question = questions[questionIndex];
   questionText.textContent = question.text;

   for (var i = 0 ; i < question.answers; i++) {
       var answers = question.answers[i];
       var liEl = document.createElement('li');
   }
 }


function startQuiz() {
  setTimeout(function() {
    displayTimeLeft();

  }, 1000);
}