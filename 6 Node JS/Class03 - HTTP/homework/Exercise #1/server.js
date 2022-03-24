const http = require("http");
const server = http.createServer((request, response) => {
  const url = request.url;
  const method = request.method;
  response.setHeader("Content-type", "text/html");
  if (url == "/") {
    response.write(`<h1>Hiiii</h1>`);
    return response.end();
  } else if (url == "/student") {
    response.write(`<p>Student name: Slavko</p>
    <p>Student lastname: Stojchevski</p>
    <p>Academy: Web Development</p>
    <p>Subject: NodeJS</p>`);
    return response.end();
  }
});
server.listen(3000);
