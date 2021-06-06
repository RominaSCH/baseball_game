const tryBtn = document.querySelector(".try_btn");
const inputValue = document.querySelector("#normal__number");

let answerArray = [];

function init(){
    answerArray = numberMaker();
}
init();

function numberMaker(){ //문제 숫자 배열 만들기
    let answerNum = [];
    let numbers = [0,1,2,3,4,5,6,7,8,9];
    let maked = 0;
    while(maked < 4){
        let randomNumber = Math.floor(Math.random()*(numbers.length));
        answerNum.push(numbers[randomNumber]);
        numbers.splice(randomNumber,1);
        maked += 1;
    }
    console.log(answerNum)
    return answerNum;
}

tryBtn.addEventListener("click", (e) => {
  e.preventDefault();
  const inputAnswer = [];
  const inputString = inputValue.value.split("");
  for(i=0;i<4;i++){
    inputAnswer.push(parseInt(inputString[i]));
  }
  console.log(inputAnswer);
  compareNum(answerArray, inputAnswer);
});
//inputNumber 중복체크 해야하고 나중에..우선 중복 안된다는 가정하에!


function compareNum(answer, input){
    let ball = 0;
    let strike = 0;
    for(i=0;i<4;i++){
        if(input[i] in answer){
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
            document.querySelector(".result__sb").style.display = "block";
            document.querySelector(".result__out").style.display = "none";
        }
    }else{
        document.querySelector(".result__sb").style.display = "block";
            document.querySelector(".result__out").style.display = "none";
    }
    if(strike === 4){
        console.log("WIN!!!")
    }
    document.querySelector(".result__s--num").innerHTML = strike;
    document.querySelector(".result__b--num").innerHTML = ball;
    
}




