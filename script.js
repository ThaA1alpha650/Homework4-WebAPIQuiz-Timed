var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#startButton")
var startEl = document.querySelector("#start")
var quizEl = document.querySelector("#quiz")
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector("#answers")
var doneEl = document.querySelector('#done')
var submitButton = document.querySelector("#submit")
var scoreEl = document.querySelector("#score")
var backButton = document.querySelector("#back")
var wrongEl = document.querySelector("#wrong")
var correctEl = document.querySelector("#correct")
var userScoreEl = document.querySelector("#userScore")
var nameInput = document.querySelector("#name")
var userScores = document.querySelector("#userScores")
var clearButton = document.querySelector("#clear")
var highScoresWl = document.querySelector("#highScores")

// Declared and assigning my variables.

var questionNumber = 0

var timer = 75
var finalScore = 0

// I wrote my own questions and made them part of an array that I named questions.

var questions = [{
        question: "In the array \[\"Pizza\", \"Burger\", \"Salad\", \"Fries\"\] what is the index of Salad?",
        answer: ["1", "4", "2", "3"],
        correct: 2,
    },
    {
        question: "Where does the <script></script> tag go in your HTML page?",
        answer: ["In the </header>", "Before the closing </body> tag", "Anywhere", "In the <nav></nav> bar"],
        correct: 1,
    },
    {
        question: "To use jQuery you need to ______?",
        answer: ["Know some javaScript", "Link the jQuery CDN", "Use dev tools for debugging", "all of the above"],
        correct: 3,
    },
    {
        question: "String values must be enclosed within _______ when being assigned to variables.",
        answer: ["commas", "curly brackets", "parentheses", "square brackets"],
        correct: 2,
    }
]


//Need to start the coding quiz using a button on click.
//document.querySelector("#start") 






//addEventListener("click", quiz);

function quiz() {

};
//Start timer and show question
// a) question variable- b) timer variable

//User is given question

// User gives answer

//either user is right or wrong
//if answer is correct on to next question.
//if answer is incorrect subtract time from timer as penalty

//For game over either time=0 or all questions have been answered 
// Once game over, be able to save both initials and score.