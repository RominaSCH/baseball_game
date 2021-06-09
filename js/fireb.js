//configuration
var firebaseConfig = {
    apiKey: "AIzaSyC2jlTyrBtyHCeq93h0hdQXJBTVv4WRqHs",
    authDomain: "baseball-1f42a.firebaseapp.com",
    projectId: "baseball-1f42a",
    storageBucket: "baseball-1f42a.appspot.com",
    messagingSenderId: "414374208160",
    appId: "1:414374208160:web:2216813ba4c9759faadfc5"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

function record(){
    const loading = document.querySelector(".loading-overlay");
    var winRecord = document.getElementById("winRecord").value;
    var scoreF = score;
    var level = key;
    database.ref("user/"+winRecord).set({
        userName : winRecord,
        score : scoreF,
        level : level
    });
    loading.style.display = "flex";
    setTimeout(() => {
        document.querySelector(".record-btn").style.display = "none";
        loading.style.display = "none";
    }, 1000);
}
// function ranking(){ 걍 mongoDB받아서 써보자...후...
//     const tableBody = document.querySelector(".main__score-body");
//     const tr = document.createElement("tr");
//     const tableName = document.createElement("td");
//     const tableScore = document.createElement("td");

//     //여기서 이제 데이터베이스에서 읽어온 값을 넣어줘야함....근데..몇개일진 모름 우선 하나만.
//     // var dbName = database.ref().child("userName");
//     // var dbScore = database.ref().child("score");
//     // dbName.on("value", snap => userName.value = snap.val());
//     // dbScore.on("value", snap => userScore.value = snap.val());
//     // database.ref().on("value", (snapshot) => {
//     //     tableName.value = snapshot.val().userName;
//     //     tableScore.value = snapshot.val().score;
//     // })
    
//     var user_ref = database.ref("user/"+"")
//     user_ref.on("value", function(snapshot){
//         var data = snapshot.val();
//         // data.orferBy("score","desc").limit(3);
//     })

//     tr.appendChild(userName);
//     tr.appendChild(userScore);
//     tableBody.appendChild(tr);
// }
// ranking();
// function makeHistory(inputNum, s, b, out){
//     const tableBody = document.querySelector(".history_body");
//     const tr = document.createElement("tr");
//     const tdNum = document.createElement("td");
//     const tdSB = document.createElement("td");
//     const tdOut = document.createElement("td");

//     tdNum.setAttribute("colspan","3");
//     tdNum.innerHTML = inputNum.join("");
//     tdSB.innerHTML = `${s}S ${b}B`;
//     if(out){
//         tdSB.innerHTML = "";
//         tdOut.innerHTML = "out";
//     } else{
//         tdSB.innerHTML = `${s}S ${b}B`;
//         tdOut.innerHTML = "";
//     }
//     tr.appendChild(tdNum);
//     tr.appendChild(tdSB);
//     tr.appendChild(tdOut);
//     tableBody.appendChild(tr);
// }