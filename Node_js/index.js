// const http = require("http");
// const fs = require("fs");

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
// fs.writeFile("./abes3.txt", "I'm Student of Abes EC", () => {
//   console.log("File is created");
// });

// fs.readFile("./abes.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("Error" + err.message);
//   } else {
//     console.log(result);
//   }
// });

// fs.appendFileSync("abes.txt", "And I'm not happy");

// fs.appendFile("abes.txt", "abes is Bad", () => {});

// fs.cpSync("abes.txt", "abes3.txt");

// const data = fs.readFileSync("data.json", "utf-8");
// const obj = JSON.parse(data);
// console.log(obj);

// const obj = { name: "Uday", age: 21 };
// const jsonData = JSON.stringify(obj);
// fs.writeFileSync("data.json", jsonData);

const os = require("os");
console.log(os.platform());
console.log(os.userInfo());
