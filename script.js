//list of questions and asnwers

const myQuizQuestion =[

  {
    question: "Why so JavaScript and Java have similar name?",

    answer1: "JavaScript is a stripped-down version of Java",

    answer2: "JavaScript's syntax is loosely based on Java's",

    answer3: "They both originated on the island of Java",

    answer4: "None of the above"

  },

  {
    question: "What are variables used for in JavaScript Programs?",

    answer1: "Varying randomly",

    answer2: "Causing high-school algebra flashbacks",

    answer3: "Wrong",

    answer4: "None of the above"

  },

  {
    question: "Which of the following is not a valid JavaScript variable name?",

    answer1: "2names",

    answer2: "_first_and_last_names",

    answer3: "FirstAndLast",

    answer4: "None of the above"
  },

  {
    question: "Inside which HTML element do we put the JavaScript?",

    answer1: "js",

    answer2: "scripting",

    answer3: "script",

    answer4: "javascript"
  },

  {
    question: " Choose the client-side JavaScript object?",

    answer1: "Database",

    answer2: "Cursor",

    answer3: "Client",

    answer4: "FileUpLoad"
  },

]

let next = 0

// Start Game

document.getElementById('startGame').addEventListener('click', () => newGame())


const newGame =() => {

  document.getElementById('startGame').style.display = "none";
  let quizQuestions = document.createElement('div')
  quizQuestions.innerHTML=`
      <ul class="list-group">
      <li class="list-group-item">${myQuizQuestion[next].question}</li>
      <li class="list-group-item">${myQuizQuestion[next].answer1}</li>
      <li class="list-group-item">${myQuizQuestion[next].answer2}</li>
      <li class="list-group-item">${myQuizQuestion[next].answer3}</li>
      <li class="list-group-item">${myQuizQuestion[next].answer4}</li>
    </ul>

  `
  document.getElementById('questions').append(quizQuestions)
}


document.addEventListener('click',event =>{
  if (event.target.classList.contains('list-group-item')){
  next ++ 
    questions.innerHTML = " "
  newGame()
    
  }

})
