//Constants
const btn_primary = document.querySelector(".btn_primary");
const modal_box = document.querySelector(".modal_box");
const modal_quit = modal_box.querySelector(".modal_quit");
const modal_start = modal_box.querySelector(".modal_start");
const quiz_game = document.querySelector(".quiz_game");
const next_question_btn = quiz_game.querySelector(".next_question_btn");
const question_options_list = document.querySelector(".question_options_list");
//variables
let total_questions = 0;
let questions_number = 1;
let correctIcon = '<div class="question_options_icon"><i class="fas fa-check"></i></div>';
let wrongIcon = '<div class="question_options_icon"><i class="fas fa-times"></i></div>';
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
    questionCounter(1);
}
//Fetching questions and options from array and showing them
function fetchQuestions(index){
    const question_text = document.querySelector(".question_text");
    let question_tag = '<span>'+ questions[index].question_number + ". "+ questions[index].the_question +'</span>';
    let option_tag = '<div class="question_options">'+ questions[index].question_options[0] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[1] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[2] + '<span></span></div>' 
                    + '<div class="question_options">'+ questions[index].question_options[3] + '<span></span></div>';
    question_text.innerHTML = question_tag;
    question_options_list.innerHTML = option_tag;
    const question_option = question_options_list.querySelectorAll(".question_options");
    for(let i = 0; i < question_option.length; i++){
        question_option[i].setAttribute("onclick", "questionsOptionSelected(this)");
    }
}
//next question btn onclick if statement
next_question_btn.onclick = () =>{
    if(total_questions < questions.length - 1){
        total_questions++;
        questions_number++;
        fetchQuestions(total_questions);
        questionCounter(questions_number);
    }else{
        console.log("Questions completed");
    }
}
//Question counter function
function questionCounter(index){
    const total_questions_counter = quiz_game.querySelector(".total_questions_counter");
    let Question_Counter = '<span><p>'+ index +'</p>of<p>'+ questions.length +'</p>Questions</span';
    total_questions_counter.innerHTML = Question_Counter;
}

//Question Option Selected function
function questionsOptionSelected(correct_answer){
    let playerAnswer = correct_answer.textContent;
    let playerCorrectAnswer = questions[total_questions].correct_answer;
    let allQuestionOptions = question_options_list.children.length;
    if(playerAnswer == playerCorrectAnswer){
        correct_answer.classList.add("correct_choice");
        console.log("Answer is the correct one");
        correct_answer.insertAdjacentHTML("beforeend", correctIcon);
    }else{
        correct_answer.classList.add("incorrect_choice");
        console.log("Answer is the wrong one");
        correct_answer.insertAdjacentHTML("beforeend", wrongIcon);

        for(let i = 0; i <allQuestionOptions; i++){
            if(question_options_list.children[i].textContent == playerCorrectAnswer){
                question_options_list.children[i].setAttribute("class", "question_options correct_choice");
                question_options_list.children[i].insertAdjacentHTML("beforeend", correctIcon);
                
            }
        }
    }
    for (let i = 0; i < allQuestionOptions; i++){
        question_options_list.children[i].classList.add("disabled_choice");
    }
}