//variables
const btn_primary = document.querySelector(".btn_primary");
const modal_box = document.querySelector(".modal_box");
const modal_quit = modal_box.querySelector(".modal_quit");
const modal_start = modal_box.querySelector(".modal_start");
const quiz_game = document.querySelector(".quiz_game");
let total_questions = 0;

//onclick to show modal_box
btn_primary.onclick = () =>{
    modal_box.classList.add("activeInfo");
}
//Onclick to hide modal_box
modal_quit.onclick = () =>{
    modal_box.classList.remove("activeInfo");
}
//Onclick to hide modal_box and show quiz_game
modal_start.onclick = () =>{
    modal_box.classList.remove("activeInfo");
    quiz_game.classList.add("activeQuiz");
}

//Fetching questions and options from array
function fetchQuestions(){
    const question_text
}