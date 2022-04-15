const http = require("http");
const fs=require("fs");
const path=require("path");
const EventEmitter=require('events');
class MyEmitter extends EventEmitter {}
const emitter = new MyEmitter();
const statsPath=path.join(__dirname, "requests.json");
const statsData=JSON.parse(fs.readFileSync(statsPath,{ encoding: "utf-8"}));
emitter.once("server-started",()=>{
    console.log("Server started.");
});
emitter.on("get",()=>{
    statsData.GET++;
    fs.writeFileSync(statsPath, JSON.stringify(statsData));
});
emitter.on("post",()=>{
    statsData.POST++;
    fs.writeFileSync(statsPath, JSON.stringify(statsData));
});
emitter.on("creative",()=>{
    statsData.creative++;
    fs.writeFileSync(statsPath, JSON.stringify(statsData));
});
const server = http.createServer((request) => {
    const url = request.url;
    const method = request.method;
    emitter.emit("server-started");
    if(method=="GET"){
        emitter.emit("get");
        if(url=="/creative"){
            emitter.emit("creative");
        }
    }
    if(method=="POST"){
        emitter.emit("post");
    }
});
server.listen(3000, "localhost", () => {});