const fs = require("fs");
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/write", (req, res) => {
  const { data } = req.body;
  fs.writeFile("file.txt", data, (err) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error writing to file");
    } else {
      res.send("Data written to file successfully");
    }
  });
});

app.get("/read", (req, res) => {
  fs.readFile("file.txt", "utf-8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).send("Error reading from file");
    } else {
      res.send(data);
    }
  });
});
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
