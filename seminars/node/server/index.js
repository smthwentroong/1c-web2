var express = require("express");
var app = express();

app.get("/", function(request, responce){
    responce.send("Hello, Node.js!")
});

app.get("/folder/page", function(request, responce) {
    var x = request.query.foo;
    responce.send({ foo: x});
    
});

app.listen(591);