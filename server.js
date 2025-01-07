const http = require("http");

const port = 8081;

const todoList = ["learn", "apply things", "succed"];

http.createServer((req, res) => {
    const {method, url} = req;
    // console.log(method, url);
    if(url == "/todos"){
        if(method == "GET"){
            res.writeHead(200, {"Content-Type" : "text/html"});
            res.write(todoList.toString());
        }
    }
    res.end();
    // res.writeHead(200, {"Content-Type" : "text/html"});
    // res.write("<h2>hey server got started!!</h2>");
    // res.end();
})
.listen(port, () =>{
    console.log(`NodeJS Server started running on post ${port}`);
})

// http://localhost:8081