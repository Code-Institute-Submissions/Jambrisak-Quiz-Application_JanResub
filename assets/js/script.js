//Constants
const btn_primary = document.querySelector(".btn_primary");
const modal_box = document.querySelector(".modal_box");
const modal_quit = modal_box.querySelector(".modal_quit");
const modal_start = modal_box.querySelector(".modal_start");
const quiz_game = document.querySelector(".quiz_game");
const next_question_btn = quiz_game.querySelector(".next_question_btn");
//variables
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
    fetchQuestions(0);
}

//Fetching questions and options from array and showing them
function fetchQuestions(index){
    const question_text = document.querySelector(".question_text");
    const question_options_list = document.querySelector(".question_options_list");
    let question_tag = '<span>'+ questions[index].the_question +'</span>';
    let option_tag = '<div class="question_options">'+ questions[index].question_options[0] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[1] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[2] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[3] + '<span></span></div>';
    question_text.innerHTML = question_tag;
    question_options_list.innerHTML = option_tag;
}