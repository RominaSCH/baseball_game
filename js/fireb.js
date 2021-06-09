//configuration
var firebaseConfig = {
    apiKey: "AIzaSyBEcrMGquOn7DZRAiOaV_0HTg2A10qgwzw",
    authDomain: "baseball-game-romina.firebaseapp.com",
    projectId: "baseball-game-romina",
    storageBucket: "baseball-game-romina.appspot.com",
    messagingSenderId: "399768318470",
    appId: "1:399768318470:web:bab1fad8dd7199a97d4987"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var database = firebase.database();

//Ready Data
// function Ready() {
//     var nameF = document.querySelector("#winRecord").value;
//     var scoreF = score;
//     var level = key;
//     return nameF, scoreF, level;
// }
//Insert Process
function save(){
    var nameF = document.querySelector("#winRecord").value;
    var scoreF = score;
    var level = key;
    database.ref("users/"+nameF).set({
        userName : nameF,
        score : scoreF,
        level : key
    });
}
document.querySelector(".gohome").addEventListener("click", ()=>{
    var nameF = document.querySelector("#winRecord").value;
    var scoreF = score;
    var level = key;
    database.ref("users/"+nameF).set({
        userName : nameF,
        score : scoreF,
        level : key
    });
    window.history.back();
})
document.querySelector(".retry-btn").addEventListener("click", ()=>{
    var nameF = document.querySelector("#winRecord").value;
    var scoreF = score;
    var level = key;
    const db = getDatabase();
    set(ref(db, "users/"+userId), {
        userName : nameF,
        score : scoreF,
        level : key
    });
    window.location.reload();
})