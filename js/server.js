const express  = require("express");
const app = express();

app.listen(8080, function(){
    console.log("listening on 8080");
});//서버를 위한 기본문법 3줄
//.listen(서버띄울 포트번호, 띄운 후 실행할 코드)

app.get("/pet", function(요청, 응답){
    응답.send("냐앙");
})