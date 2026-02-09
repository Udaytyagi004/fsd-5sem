const http = require("http");
const fs = require("fs");

// http
//   .createServer((req, res) => {
//     if (req.url === "/" && req.method === "GET") {
//       res.writeHead(200, { "Content-Type": "image/jpeg" });

//       const stream = fs.createReadStream("2.jpg");
//       stream.pipe(res);
//     } else if (req.url === "/login" && req.method === "GET") {
//       res.end("Login Page");
//     } else if (req.url === "/about") {
//       res.end("My name is Uday Tyagi");
//     } else if (req.url === "/contact") {
//       res.end("Phone No. 9027652365");
//     } else {
//       res.end("ERROR : 404 Page not found");
//     }
//   })
//   .listen(3000, () => {
//     console.log("Server is listening on port 3000");
//   });

// fs.writeFileSync("./abes.txt", "I'm Student of Abes EC");

// const result = fs.readFileSync("./abes.txt", "utf-8");
fs.writeFile("./abes3.txt", "I'm Student of Abes EC", () => {
  console.log("File is created");
});
