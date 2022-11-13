//variables
const btn_primary = document.querySelector(".btn_primary button");
const modal_box = document.querySelector(".modal_box");
const modal_quit = modal_box.querySelector(".buttons .modal_quit");
const modal_start = document.querySelector(".buttons .modal_start");

//If statement for start quiz button, when clicked
btn_primary.onclick = () =>{
    modal_box.classList.add("activeInfo");
}