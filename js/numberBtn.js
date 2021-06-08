const btn0 = document.querySelector(".btn0");
const btn1 = document.querySelector(".btn1");
const btn2 = document.querySelector(".btn2");
const btn3 = document.querySelector(".btn3");
const btn4 = document.querySelector(".btn4");
const btn5 = document.querySelector(".btn5");
const btn6 = document.querySelector(".btn6");
const btn7 = document.querySelector(".btn7");
const btn8 = document.querySelector(".btn8");
const btn9 = document.querySelector(".btn9");
//한계없이 써지는 문제를 easy, normal, hard, extreme 마다 다르게.
//변수명은 같게, 변수값은 다르게
btn0.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "0";
    }
})
btn1.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "1";
    }
})
btn2.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "2";
    }
})
btn3.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "3";
    }
})
btn4.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "4";
    }
})
btn5.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "5";
    }
})
btn6.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "6";
    }
})
btn7.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "7";
    }
})
btn8.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "8";
    }
})
btn9.addEventListener("click", ()=> {
    if(inputValue.value.length < key){
        inputValue.value += inputValue.innerHTML + "9";
    }
})

function outNumbers(array){
    for(i=0;i<(array.length);i++){
        if(array[i] === 0){
            btn0.style.backgroundColor = "dimgrey";
        } else if(array[i] === 1){
            btn1.style.backgroundColor = "dimgrey";
        }else if(array[i] === 2){
            btn2.style.backgroundColor = "dimgrey";
        }else if(array[i] === 3){
            btn3.style.backgroundColor = "dimgrey";
        }else if(array[i] === 4){
            btn4.style.backgroundColor = "dimgrey";
        }else if(array[i] === 5){
            btn5.style.backgroundColor = "dimgrey";
        }else if(array[i] === 6){
            btn6.style.backgroundColor = "dimgrey";
        }else if(array[i] === 7){
            btn7.style.backgroundColor = "dimgrey";
        }else if(array[i] === 8){
            btn8.style.backgroundColor = "dimgrey";
        }else if(array[i] === 9){
            btn9.style.backgroundColor = "dimgrey";
        }
    }
}