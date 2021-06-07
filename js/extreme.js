const tryBtn = document.querySelector(".try_btn");
const inputValue = document.querySelector("#extreme__number");

let answerArray = [];
let score = 100;
let tryTimes = 0;

function init() {
    answerArray = numberMaker();
}
init();

function numberMaker() { //문제 숫자 배열 만들기
    let answerNum = [];
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let maked = 0;
    while (maked < 6) {
        let randomNumber = Math.floor(Math.random() * (numbers.length));
        answerNum.push(numbers[randomNumber]);
        numbers.splice(randomNumber, 1);
        maked += 1;
    }
    console.log(answerNum);
    return answerNum;
}

tryBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputAnswer = [];
    const inputString = inputValue.value.split("");
    for (i = 0; i < 6; i++) {
        inputAnswer.push(parseInt(inputString[i]));
    }
    compareNum(answerArray, inputAnswer);
});
//inputNumber 중복체크 해야하고 나중에..우선 중복 안된다는 가정하에!


function compareNum(answer, input) { //답이랑 input값이랑 비교하는 함수
    const navScore = document.querySelector(".nav__score--number");
    const resultSB = document.querySelector(".result__sb");
    const resultOut = document.querySelector(".result__out");
    const modalScore = document.querySelector(".win-modal__score");
    const modal = document.querySelector(".win-modal-overlay");

    tryTimes += 1;
    let ball = 0;
    let strike = 0;
    for (i = 0; i < 6; i++) { //strike, ball find
        if (answer.includes(input[i])) {
            if (input[i] === answer[i]) {
                strike += 1;
            } else {
                ball += 1;
            }
        }
    }

    if (strike === 0) {
        if (ball === 0) { //out!
            if (tryTimes < 5) {
                score -= 6;
            } else {
                score -= 8;
            }
            resultSB.style.display = "none";
            resultOut.style.display = "block";
        } else { //0S 1~4B
            if (tryTimes < 5) {
                score -= 6;
            } else {
                score -= 8;
            }
            resultSB.style.display = "flex";
            resultOut.style.display = "none";
        }
    } else { //1~4S 1~4B
        if (tryTimes < 5) {
            score -= 6;
        } else {
            score -= 8;
        }
        resultSB.style.display = "flex";
        resultOut.style.display = "none";
    }
    navScore.innerHTML = score;
    document.querySelector(".result__s--num").innerHTML = strike;
    document.querySelector(".result__b--num").innerHTML = ball;
    if (strike === 5) {
        if (tryTimes > 5) {
            score += 8;
            navScore.innerHTML = score;
            console.log("WIN!!!");
            modalScore.innerHTML = score;
            modal.style.display = "flex";
        } else {
            score += 6;
            navScore.innerHTML = score;
            console.log("WIN!!!");
            modalScore.innerHTML = score;
            modal.style.display = "flex";
        }
    }
}


document.querySelector(".delete_btn").addEventListener("click", (e) => {
    e.preventDefault();
    inputValue.value = "";
});