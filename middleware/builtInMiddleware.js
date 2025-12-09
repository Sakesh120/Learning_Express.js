import express from "express";
const app = express();
import path from "path";

const absPath = path.resolve("public");
app.use(express.static(absPath));
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Home page");
});
app.get("/login", (req, res) => {
  res.sendFile(absPath + "/op.html");
});
app.post("/submit", (req, res) => {
  res.send("sumit page");
  console.log(req.body);
});
app.get("/user", (req, res) => {
  res.send("user page");
});
app.listen(3100);
