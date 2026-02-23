const http = require("http");
const fs = require("fs");
const { isUtf8 } = require("buffer");

http
  .createServer((req, res) => {
    if (req.url == "/" && req.method == "POST") {
      let body = "";
      req.on("data", (chunk) => {
        body += chunk.toString();
      });

      req.on("end", () => {
        const jsonData = JSON.parse(body);

        fs.writeFileSync("data.json", JSON.stringify(jsonData));
      });

      res.end("data written succesfully");
    }
    if (req.url === "/read" && req.method === "GET") {
      const data = fs.readFileSync("data.json");
      const obj = JSON.parse(data);
      console.log(obj);
      res.end(JSON.stringify(obj));
    }
  })
  .listen(3000, () => {
    console.log("Server is listening on port 3000");
  });
