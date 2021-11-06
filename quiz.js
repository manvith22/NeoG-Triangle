const quizForm = document.querySelector(".quiz-form");
const btn = document.querySelector("#btn");
const output = document.querySelector("#output");

const correctAnswer = ["90°","right angled"];


function calculateScore(){
    let index = 0;
    let score = 0;

    var formResults = new FormData(quizForm);
    for( let i of formResults.values() ){
        if( i === correctAnswer[index]){
             score = score+1;
        }
        index++;
    }
    output.innerText = "your score is " + score;
}


btn.addEventListener('click',calculateScore);