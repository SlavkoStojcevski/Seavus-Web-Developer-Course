const http = require("http");
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  response.setHeader("Content-type", "text/html");
  if (url == "/") {
    response.write(`<h1>Hiiii</h1>`);
    return response.end();
  } else if (url == "/add_student") {
    response.write(`<form action='/all_students' method='post'>
        <input name='allStudents'>
        <button>Students</button>
    </form>`);
    return response.end();
  } else if (url == "/all_students") {
      let chunksReceived = [];
      request.on("data",(chunk)=>{
          chunksReceived.push(chunk);
      })
      request.on("end", () => {
        const parsedData = Buffer.concat(chunksReceived).toString();
        console.log(parsedData.split("=")[1]);
      })
      return response.end();
  }
});
server.listen(3000);