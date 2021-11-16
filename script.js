//list of questions and asnwers

const myQuizQuestion =[

  {
    question: "What does HTML stand for?",

    answer1: "Correct",

    answer2: "Wrong",

    answer3: "Wrong",

    answer4: "A"

  }

]
//   {
//     question: "What does HTML stand for? #2",

//     button1: "Correct",

//     button2: "Wrong",

//     button3: "Wrong",

//     button4: "A"

//   },
// ]

// const finalQuestion = myQuizQuestion.length - 1;

// let currentQuestion = myQuizQuestion.length = 0;




// render a question

// function renderQuestion() {

//   let q = myQuizQuestionArr[currentQuestion];

//   question.innerHTML = "<p>" + q.question + "</p>";


//   button1.innerHTML = q.button1;
//   button2.innerHTML = q.button2;
//   button3.innerHTML = q.button3;
//   button4.innerHTML = q.button4;

// }



// Start Game

document.getElementById('startGame').addEventListener('click', () => newGame())


const newGame =() => {

  document.getElementById('startGame').style.display = "none";
  document.getElementById('button1').style.display = "block";
  document.getElementById('button2').style.display = "block";
  document.getElementById('button3').style.display = "block";
  document.getElementById('button4').style.display = "block";

  let button1 = document.getElementById('button1') 
  button1.innerHTML = myQuizQuestion[0].answer1
  
  let button2 = document.getElementById('button2')
  button2.innerHTML = myQuizQuestion[0].answer2

  let button3 = document.getElementById('button3')
  button3.innerHTML = myQuizQuestion[0].answer3

  let button4 = document.getElementById('button4')
  button4.innerHTML = myQuizQuestion[0].answer4
}



