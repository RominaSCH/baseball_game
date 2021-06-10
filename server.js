const express = require("express");
const app = express();
app.use(express.urlencoded({ extended: true }))
const MongoClient = require("mongodb").MongoClient;
var db;
mongoURL = "mongodb://cuqi213:dhktej31@cluster0-shard-00-00.n2tu4.mongodb.net:27017,cluster0-shard-00-01.n2tu4.mongodb.net:27017,cluster0-shard-00-02.n2tu4.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-9mw6x1-shard-0&authSource=admin&retryWrites=true&w=majority";
app.set("view engine", "ejs");
//------------------------apple code---------------------

// MongoClient.connect(mongoURL,{ useUnifiedTopology: true }, (error, client) => {
//     if(error){ return console.log(error);}

//     db = client.db("baseball-game");
//     db.collection("score").insertOne({_id: 2, userName : "amin"}, (Error, res) => {
//         console.log("saved");
//     })

//     app.listen(8080, function(){
//         console.log("listening on 8080");
//     });
// });
//------------------------------------------------------

app.post("/add", (req, res) => {
    MongoClient.connect(mongoURL,{ useUnifiedTopology: true }, (error, client) => {
        if(error){ return console.log(error);}
        // console.log(req.body);
        db = client.db("baseball-game");
        db.collection("score").insertOne({_id:new Date(),userName : req.body.userName, score:req.body.score, level:req.body.key}, (Error, res) => {
            console.log("saved");
        });
    
    });
});//와씨바 하루종일 걸리네... 이걸 이해못해? 멍청이야!?

app.listen(8080, function(){
    console.log("listening on 8080");
});//서버를 위한 기본문법 3줄
//.listen(서버띄울 포트번호, 띄운 후 실행할 코드)

app.get("/", (요청, 응답) => { //함수안에 함수 들어가는게 콜백함수
    응답.sendFile(__dirname + "/index.html");
})
app.use(express.static(__dirname + "/public"));
app.get("/easy", function (request, respond) {
    respond.sendFile(__dirname + "/easy.html");
})
app.get("/normal", function (request, respond) {
    respond.sendFile(__dirname + "/normal.html");
})
app.get("/hard", function (request, respond) {
    respond.sendFile(__dirname + "/hard.html");
})
app.get("/extreme", function (request, respond) {
    respond.sendFile(__dirname + "/normal.html");
})
app.get("/rank", function(req, res){
    MongoClient.connect(mongoURL,{ useUnifiedTopology: true }, (error, client) => {
        if(error){ return console.log(error);}
        // console.log(req.body);
        db = client.db("baseball-game");
        db.collection("score").find().toArray((err, result) => {//db에서 자료찾기
        // console.log(result);
        res.render("rank.ejs", {scores : result});//찾은 자료 ejs 에 넣어주세요
        });
    });
    // res.render("list.ejs", {scores : result});
    //DB에 저장된 score라는 collection안의 데이터를 꺼내주세요!
});

//  DB에 저장해주세요! 할거임!
//req.body로 요청했던 form 에 적힌 데이터 수신 가능
//nodemon -L js/server.js 로 해야함 wsl에서 nodemon이 잘 안먹는다함.