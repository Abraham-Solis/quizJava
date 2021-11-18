//list of questions and asnwers

const myQuizQuestion = [

  {
    question: "Why so JavaScript and Java have similar name?",

    answer1: "JavaScript is a stripped-down version of Java",

    answer2: "JavaScript's syntax is loosely based on Java's",

    answer3: "They both originated on the island of Java",

    answer4: "None of the above"
    
    correct: [2]

  },

  {
    question: "What are variables used for in JavaScript Programs?",

    answer1: "Varying randomly",

    answer2: "Causing high-school algebra flashbacks",

    answer3: "Wrong",

    answer4: "None of the above"

    correct: [1]

  },

  {
    question: "Which of the following is not a valid JavaScript variable name?",

    answer1: "2names",

    answer2: "_first_and_last_names",

    answer3: "FirstAndLast",

    answer4: "None of the above"

    correct: [1]
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",

    answer1: "js",

    answer2: "scripting",

    answer3: "script",

    answer4: "javascript"
    
    correct: [2]
  },

  {
    question: " Choose the client-side JavaScript object?",

    answer1: "Database",

    answer2: "Cursor",

    answer3: "Client",

    answer4: "FileUpLoad"

    correct: [4]
  }

]

let next = 0
let score = 0
let timerObject
let countdownTimer= 160


document.getElementById('go').addEventListener('click', () => {
  timerObject = setInterval(function () {
    document.getElementById("timer").innerText = countdownTimer

    if (countdownTimer <= 0) {
      clearInterval(timerObject)
      showResults()
    }
    else {
      countdownTimer--
    }
  }, 1000)
  newGame()
}


// Start Game

// document.getElementById('startGame').addEventListener('click', () => newGame())

const newGame =() => {

  document.getElementById('go').style.display = "none";
  let quizQuestions = document.createElement('div')
  quizQuestions.innerHTML=`
      <ul class="list-group">
      <li ${myQuizQuestion[next].question}</li>
      <li data-value ="1" class="list-group-item">${myQuizQuestion[next].answer1}</li>
      <li data-value ="2" class="list-group-item">${myQuizQuestion[next].answer2}</li>
      <li data-value ="3" class="list-group-item">${myQuizQuestion[next].answer3}</li>
      <li data-value ="4" class="list-group-item">${myQuizQuestion[next].answer4}</li>
    </ul>

  `
  document.getElementById('questions').append(quizQuestions)
}



//Rules of the Game 

document.addEventListener('click',event =>{
  if (event.target.classList.contains('list-group-item')){

    let userChoice = event.target.getAttrabute('data-value')
    console.log(userChoice)
    
    if (userChoice == myQuizQuestion[next].correct) {
      score += 15
      document.getElementById('right').innerText="You are Correct!"
      
    } else {
      document.getElementById('right').innerText ="You are Wrong!"
      countdownTimer -=5
    }
    if (next < myQuizQuestion.length -1 ) {
      next++
      questions.innerHTML = " "
      newGame()
    } else {
      clearInterval(timerObject)
      showResults()
    }
  }

})


function showResults() {
  document.getElementById('go').style.display="none";
  question.innerHTML =`
  <h6> Total Score : ${score+countdownTimer}</h6><input="Username" placeholder="your initals"></input>

  <button id="UserId"> Add to Leaderboards </button>
  
  `

  
}

