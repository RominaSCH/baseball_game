const tryBtn = document.querySelector(".try_btn");
const inputValue = document.querySelector("#normal__number");

const answerArray = numberMaker();

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
    // for(i=0;i<4;i++){
    //     if(input[i] in 
    // }
}




