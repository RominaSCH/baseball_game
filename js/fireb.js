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