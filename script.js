//list of questions and asnwers

const myQuizQuestion =[

  {
    question: "What does HTML stand for?",

    answer1: "Correct",

    answer2: "Wrong",

    answer3: "Wrong",

    answer4: "A"

  },
  {
    question: "What does HTML stand for? #2",

    answer1: "Correct",

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
      <li class="list-group-item">${myQuizQuestion[0].question}</li>
      <li class="list-group-item">${myQuizQuestion[0].answer1}</li>
      <li class="list-group-item">${myQuizQuestion[0].answer2}</li>
      <li class="list-group-item">${myQuizQuestion[0].answer3}</li>
      <li class="list-group-item">${myQuizQuestion[0].answer4}</li>
    </ul>
   
  
  `
  document.getElementById('questions').append(quizQuestions)
}


document.addEventListener('click',event =>{
  if (event.target.classList.contains('list-group-item')){
    let quizQuestions = document.createElement('div')
    quizQuestions.innerHTML = `
      <ul class="list-group">
      <li class="list-group-item">${myQuizQuestion[1].question}</li>
      <li class="list-group-item">${myQuizQuestion[1].answer1}</li>
      <li class="list-group-item">${myQuizQuestion[1].answer2}</li>
      <li class="list-group-item">${myQuizQuestion[1].answer3}</li>
      <li class="list-group-item">${myQuizQuestion[1].answer4}</li>
    </ul>
   
  
  `
    document.getElementById('questions').append(quizQuestions)
    
  }

})
