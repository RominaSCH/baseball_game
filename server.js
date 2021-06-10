const express  = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
const MongoClient = require("mongodb").MongoClient;

var db;
var dbConnect = MongoClient.connect("mongodb://cuqi213:dhktej31@cluster0-shard-00-00.n2tu4.mongodb.net:27017,cluster0-shard-00-01.n2tu4.mongodb.net:27017,cluster0-shard-00-02.n2tu4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-9mw6x1-shard-0&authSource=admin&retryWrites=true&w=majority",{ useUnifiedTopology: true });

app.post("/", (req, res) => {
    dbConnect.then((db) => {
        delete req.body,_id; //for safety reasons
        db.collection("score").insertOne(req.body);
        console.log("saved");
    });
    res.send("Data received:\n" + JSON.stringify(req.body));
});
//  (error, client) => {
//     //연결되면 할 일
//     if(error){ return console.log(error)}
//     db = client.db("baseball-game");
//     db.collection("score").insertOne({_id:userName, }, (error, result) => {
//         console.log('saved');
//     });
//     app.listen(8080, function(){
//         console.log("listening on 8080");
//     });
// }) 
app.listen(8080, function(){
            console.log("listening on 8080");
});
// app.listen(8080, function(){
//     console.log("listening on 8080");
// });//서버를 위한 기본문법 3줄
//.listen(서버띄울 포트번호, 띄운 후 실행할 코드)

app.get("/", (요청, 응답) => { //함수안에 함수 들어가는게 콜백함수
    응답.sendFile(__dirname + "/index.html");
})
app.use(express.static(__dirname + "/public"));
app.get("/easy.html", function(request, respond){
    respond.sendFile(__dirname + "/easy.html");
})
app.get("/normal.html", function(request, respond){
    respond.sendFile(__dirname + "/normal.html");
})
app.get("/hard.html", function(request, respond){
    respond.sendFile(__dirname + "/hard.html");
})
app.get("/extreme.html", function(request, respond){
    respond.sendFile(__dirname + "/normal.html");
})
app.post("/add", (req, res) => {
    res.send("recorded your score and name");
    var winRecord = document.getElementById("winRecord").value;
    db.collection("score").insertOne({_id: winRecord, userName : winRecord, score: score, level : key}, (error, result) => {
    console.log('saved');
    });
    //  DB에 저장해주세요! 할거임!
}) //req.body로 요청했던 form 에 적힌 데이터 수신 가능
//nodemon -L js/server.js 로 해야함 wsl에서 nodemon이 잘 안먹는다함.