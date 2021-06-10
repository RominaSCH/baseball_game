const express  = require("express");
const app = express();
app.use(express.urlencoded({extended: true}))
const MongoClient = require("mongodb").MongoClient;

var db;
MongoClient.connect("mongodb+srv://cuqi213:dhktej31@cluster0.n2tu4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", (error, client) => {
    //연결되면 할 일
    if(error){ return console.log(error);}
    db = client.db("baseball-game");
    db.collection("score").insertOne("저장할 데이터", (error, result) => {
        console.log('saved');
    });
    app.listen(8080, function(){
        console.log("listening on 8080");
    });
}) 

// app.listen(8080, function(){
//     console.log("listening on 8080");
// });//서버를 위한 기본문법 3줄
//.listen(서버띄울 포트번호, 띄운 후 실행할 코드)

app.get("/", (요청, 응답) => { //함수안에 함수 들어가는게 콜백함수
    응답.sendFile(__dirname + "/index.html");
})
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
// app.post("/record", (req, res) => {
//     res.send("recorded your score and name");
//     console.log(req.body.userName);
//      DB에 저장해주세요! 할거임!
// }) //req.body로 요청했던 form 에 적힌 데이터 수신 가능
//nodemon -L js/server.js 로 해야함 wsl에서 nodemon이 잘 안먹는다함.