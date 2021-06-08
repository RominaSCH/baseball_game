const first = document.querySelector(".first");
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const leftBtn = document.querySelector(".modal_left");
const rightBtn = document.querySelector(".modal_right");
const closeBtn = document.querySelector(".modal_close");
const explainBtn = document.querySelector(".explain-btn");
const modalDisplay = document.querySelector(".explain__modal-overlay");

let page = 1;

explainBtn.addEventListener("click", ()=> {
    modalDisplay.style.display = "flex";
});
closeBtn.addEventListener('click',() => {
    modalDisplay.style.display = "none";
});
rightBtn.addEventListener("click",()=>{
    if(page === 1){
        page += 1;
        first.style.display = "none";
            second.style.display = "block";
    } else if(page === 2){
        page += 1;
        second.style.display = "none";
            third.style.display = "block";
    }
})
leftBtn.addEventListener("click",()=>{
    if(page === 3){
        page -= 1;
        third.style.display = "none";
        second.style.display = "block";
    } else if(page === 2){
        page -= 1;
        second.style.display = "none";
        first.style.display = "block";
    }
})
