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
    question: "What does HTML stand for? #2",

    answer1: "Correct #2",

    answer2: "Wrong",

    answer3: "Wrong",

    answer4: "A"

  }

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
