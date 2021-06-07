const tryBtn = document.querySelector(".try_btn");
const inputValue = document.querySelector("#hard__number");

let answerArray = [];
let score = 80;

function init(){
    answerArray = numberMaker();
}
init();

function numberMaker(){ //문제 숫자 배열 만들기
    let answerNum = [];
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let maked = 0;
    while(maked < 5){
        let randomNumber = Math.floor(Math.random()*(numbers.length));
        answerNum.push(numbers[randomNumber]);
        numbers.splice(randomNumber,1);
        maked += 1;
    }
    console.log(answerNum);
    return answerNum;
}

tryBtn.addEventListener("click", (e) => {
  e.preventDefault();
    score -= 3;
    document.querySelector(".nav__score--number").innerHTML = score;

  const inputAnswer = [];
  const inputString = inputValue.value.split("");
  for(i=0;i<5;i++){
    inputAnswer.push(parseInt(inputString[i]));
  }
  console.log(inputAnswer);
  compareNum(answerArray, inputAnswer);
});
//inputNumber 중복체크 해야하고 나중에..우선 중복 안된다는 가정하에!


function compareNum(answer, input){
    let ball = 0;
    let strike = 0;
    for(i=0;i<5;i++){
        if(answer.includes(input[i])){
            if(input[i] === answer[i]){
                strike += 1;
            }else{
                ball += 1;
            }
        }
    }
    
    if(strike === 0){
        if(ball === 0){
            document.querySelector(".result__sb").style.display = "none";
            document.querySelector(".result__out").style.display = "block";

        }else{
            document.querySelector(".result__sb").style.display = "flex";
            document.querySelector(".result__out").style.display = "none";
        }
    }else{
        document.querySelector(".result__sb").style.display = "flex";
            document.querySelector(".result__out").style.display = "none";
    }
    document.querySelector(".result__s--num").innerHTML = strike;
    document.querySelector(".result__b--num").innerHTML = ball;
    if(strike === 5){
        console.log("WIN!!!");
        document.querySelector(".win-modal__score").innerHTML = score;
        document.querySelector(".win-modal-overlay").style.display = "flex";
        //win modal 열고 home 화면으로 돌아가게 만들어야함.
    }
}

document.querySelector(".delete_btn").addEventListener("click", (e) => {
    e.preventDefault();
    inputValue.value = "";
});