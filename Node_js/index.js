const http = require("http");

http
  .createServer((req, res) => {
    if (req.url === "/" && method === "GET") {
      res.end("Home page");
    } else if (req.url === "/login" && method === "GET") {
      res.end("Login Page");
    } else {
      res.end("Hello from the server");
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
