const { log } = require("console");
const http = require("http");
const fs = require("fs");

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New Req Rec\n`;
    fs.appendFile('log.txt', log, (err, data) => {
        switch(req.url){
            case "/": res.end("HomePage");
            break;
            case "/about": res.end("I am Harsh Sharma");
            break;
            default: res.end("404 Error");
        }
        // res.end("Hello From Server");
    });
});

myServer.listen(8000,() => console.log("Server Started!"));