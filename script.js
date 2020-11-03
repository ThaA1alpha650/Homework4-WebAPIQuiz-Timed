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
var finalScore = ""

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

function toggleDone() {
    // Toggles the done element
    // Displays user score
    if (doneEl.style.display == "none") {
        doneEl.style.display = "block"
        userScoreEl.textContent = "Your final score " + finalScore
    } else {
        doneEl.style.display = "none"

    }
}

// Deciding how to measure top score because if I only include the correct answers it doesn't take into account the user that answers the questions the fastest. 
//Also since the timer counts down and we are looking for a *"High"score*, I'll try to find a way to improve that... I did say TRY!

function toggleScore() {

    // Toggles the score element, Displays top scores
    while (userScores.lastElementChild) {
        userScores.removeChild(userScores.lastElementChild);
    }
    if (scoreEl.style.display == "none") {
        scoreEl.style.display = "block"

        Object.keys(localStorage).forEach(element => {
            var user = document.createElement("li")
            user.textContent = element + " - " + localStorage.getItem(element)
            user.setAttribute('class', "bg-secondary text-white p-1 mb-2")
            userScores.appendChild(user)
                // console.log(element, element.value )

        });

    } else {
        scoreEl.style.display = "none"

    }
}


// Need to start the coding quiz using a button on click.
//But first we need to toggle all the elements based on the relevant buttons.

function toggleStart() {
    // And so we toggle the start Element, Instructions and start button.

    if (startEl.style.display == "none") {
        startEl.style.display = "block"
    } else {
        startEl.style.display = "none"

    }
}

function toggleQuiz() {
    // We toggle the quiz element.
    if (quizEl.style.display == "none") {
        quizEl.style.display = "block"
    } else {
        quizEl.style.display = "none"

    }
}

// In terms of reactions wrong not only triggers a wrong alert and then a move on to the next question, I also triggers the time penalty. 
// And if not wrong there is no time penalty and no extra timer related action.

function toggleWrong() {
    // If user picks the wrong answer, it toggles the wrong element, 1 second timer
    if (wrongEl.style.display == "none") {
        wrongEl.style.display = "block"
        var correctTime = 1
        var timerInterval = setInterval(function() {
            correctTime--
            if (correctTime == 0) {
                clearInterval(timerInterval)
                toggleWrong()
            }

        }, 1000)
    } else {
        wrongEl.style.display = "none"

    }
}


function toggleCorrect() {
    // If the user picks right answer, toggles the wrong element, 1 second timer

    if (correctEl.style.display == "none") {
        correctEl.style.display = "block"

        var correctTime = 1
        var timerInterval = setInterval(function() {
            correctTime--
            if (correctTime == 0) {
                clearInterval(timerInterval)
                toggleCorrect()
            }

        }, 1000)
    } else {
        correctEl.style.display = "none"

    }
}

// Questions are to be made accessible.


function loadQuestion() {

    // Loads Questions

    while (answerEl.lastElementChild) {
        answerEl.removeChild(answerEl.lastElementChild);
    }

    if (questions[questionNumber]) {
        questionEl.textContent = questions[questionNumber].question

        questions[questionNumber].answer.forEach(function(element, i) {
            var answers = document.createElement("button")
            answers.textContent = element
            console.log(i)
            answers.setAttribute("class", "btn btn-primary  p-3 m-2 ")
            answers.setAttribute("data-index", i)
            answerEl.appendChild(answers)

        });
    } else {
        //toggleDone()
        //toggleQuiz()
        finalScore = timer
        timer = 1
    }

}

// Adding the submit button, toggles upon completion of quiz, the page knows.
// Submits the name to local storage
submitButton.addEventListener("click", function() {
    toggleDone()
    var name = nameInput.value.trim()
    localStorage.setItem(name, timer)
    toggleScore()

})

// Returns user to home screen
backButton.addEventListener("click", function() {
        toggleScore()
        toggleStart()
        timerEl.textContent = "Time: 75"
    })
    //document.querySelector("#start") 
    //addEventListener("click", quiz);

//Start timer

// Set timer for quiz
function time() {
    timer = 75
    console.log(timer)
    var timerInterval = setInterval(function() {
        timer--
        timerEl.textContent = "Time: " + timer


        if (timer == 0) {
            clearInterval(timerInterval)
            toggleQuiz()
            toggleDone()
        }

    }, 1000)


}

// Starts the quiz
buttonEl.addEventListener("click", function() {
    timer = 75
    questionNumber = 0
    console.log(timer, questionNumber)
    time()

    toggleStart()
    toggleQuiz()

    loadQuestion()



    //User is given questions

    answerEl.addEventListener("click", function(event) {
        var element = event.target

        if (element.matches("button")) {
            var index = element.getAttribute("data-index")

            console.log(index, questions[questionNumber].correct)

            if (index == questions[questionNumber].correct) {
                questionNumber++
                toggleCorrect()
                loadQuestion()

            } else {
                questionNumber++
                timer -= 15
                loadQuestion()
                toggleWrong()
            }

        }
    })

    // Shows high scores
    console.log(finalScore)
    highScoresWl.addEventListener("click", function() {

        toggleScore()
        toggleStart()
    })

    console.log(highScoresWl)

    console.log(userScoreEl)
    console.log(userScores)
        // Clears local storage
    clearButton.addEventListener("click", function() {
        localStorage.clear()

        while (userScores.lastElementChild) {
            userScores.removeChild(userScores.lastElementChild)
        }

        toggleStart()
        toggleScore()
    })

    //At this point the questions run through and the answers work just fine. 
    //It just needs the ability to submit using the submit button, as well as the ability to save scores locally. 
    //I think I'll just use the time left over as the score. 
    //In comparison to others and their score taking the same quiz under the same conditions/parameters I think their results will speak for themselves. 
    //as the quiz is only over once all questions are answered and the wrong ones deduct time. 
    //Therefore no need to reverse anything, the best will have the most time left and so the highest score. 
    //Lesson learned, no need to try and fix anything that isn't broken.
    // User gives answer

    //either user is right or wrong
    //if answer is correct on to next question.
    //if answer is incorrect subtract time from timer as penalty

    //For game over either time=0 or all questions have been answered 
    // Once game over, be able to save both initials and score.//
})