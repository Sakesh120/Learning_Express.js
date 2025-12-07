import express from "express";
import abpath from "./absolutePath.js";
import path from "path";

const app = express();
const absPath = abpath();
const absPublic = path.resolve("public");
app.use(express.static(absPublic));

app.get("/", (req, res) => {
  res.sendFile(absPath + "/home.html");
});
app.get("/login", (req, res) => {
  res.sendFile(absPath + "/login.html");
});
app.get("/about", (req, res) => {
  res.sendFile(absPath + "/about.html");
});
app.use((req, res) => {
  res.status(404).sendFile(absPath + "/404.html");
});

app.listen(3500);

console.log();
